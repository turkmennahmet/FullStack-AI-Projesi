import React, { useState } from "react";
import axios from "axios";
import "./Chat.css";
import logo from "../assets/ko.png";

const Chat = () => {
  const [nickname, setNickname] = useState("");
  const [nicknameSet, setNicknameSet] = useState(false); // kullanıcı adı girildi mi
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!text) return;
    //backend .stek
    try {
      const res = await axios.post("http://localhost:5227/api/Message", {
        nickname: nickname,
        text: text,
        sentiment: ""
      });

      setMessages([res.data]);
      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  
  if (!nicknameSet) {
    // Kullanıcı adı girişi ekranı
    return (
      <div className="chat-container">
        <h2>Enter your nickname</h2>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
        />
        <button onClick={() => nickname && setNicknameSet(true)}>
          Start Chat
        </button>
      </div>
    );
  }

  return (
    <div className="chat-container">
  <img src={logo} alt="Logo" className="chat-logo" />
  <h2>Duygu Analiz Chat</h2>
  <div className="chat-box">
    {messages.map((msg, index) => (
      <div key={index} className="chat-message">
        <b>{msg.nickname}:</b> {msg.text} <i>({msg.sentiment})</i>
      </div>
    ))}
  </div>
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
    placeholder="Type your message..."
  />
  <button onClick={sendMessage}>Send</button>
</div>

  );
};

export default Chat;
