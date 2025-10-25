import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import axios from "axios";
import { chatStyles as styles } from './src/styles/style';



import logo from "./assets/ko.png"; //konuşarak öğren logo

export default function App() {
  const [nickname, setNickname] = useState("");
  const [nicknameSet, setNicknameSet] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!text) return;

    try {
      const API_URL = "https://fullstack-ai-projesi-1-r6ed.onrender.com/api/Message";

      const res = await axios.post(API_URL, {
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
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter your nickname</Text>
        <TextInput
          style={styles.input}
          value={nickname}
          onChangeText={setNickname}
          placeholder="Nickname"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => nickname && setNicknameSet(true)}
        >
          <Text style={styles.buttonText}>Start Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {logo && <Image source={logo} style={styles.logo} />}
      <Text style={styles.title}>Duygu Analiz Chat</Text>
      <ScrollView style={styles.chatBox}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.chatMessage}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>{msg.nickname}:</Text> {msg.text} <Text style={{ fontStyle: "italic" }}>({msg.sentiment})</Text>
            </Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type your message..."
        onSubmitEditing={sendMessage}
      />
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}