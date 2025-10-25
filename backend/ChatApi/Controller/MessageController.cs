using Microsoft.AspNetCore.Mvc;
using ChatApi.Data;
using ChatApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System.Text.Json;

namespace ChatApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessageController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _config;

        public MessageController(AppDbContext context, IHttpClientFactory httpClientFactory, IConfiguration config)
        {
            _context = context;
            _httpClientFactory = httpClientFactory;
            _config = config;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Message message)
        {
            var client = _httpClientFactory.CreateClient();
            var payload = JsonSerializer.Serialize(new { text = message.Text });

            // Python AI servisine POST
            var response = await client.PostAsync("https://fullstack-ai-projesi-1-r6ed.onrender.com/predict",
            new StringContent(payload, Encoding.UTF8, "application/json")
            );

            response.EnsureSuccessStatusCode();


            response.EnsureSuccessStatusCode();

            var hfResponse = await response.Content.ReadAsStringAsync();

            // JSON parse: {"sentiment":"Positive"}
            var sentiment = JsonDocument.Parse(hfResponse).RootElement.GetProperty("sentiment").GetString();
            message.Sentiment = sentiment;

            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return Ok(message);
        }



        [HttpGet]
        public async Task<IActionResult> List()
        {
            var messages = await _context.Messages.OrderByDescending(m => m.Id).ToListAsync();
            return Ok(messages);
        }
    }
}