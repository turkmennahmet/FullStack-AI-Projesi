using System;

namespace ChatApi.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Nickname { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
        public string Sentiment { get; set; } = string.Empty;
        
    }
}