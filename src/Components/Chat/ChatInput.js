import React, { useState } from "react";
import firebase from "firebase";
import "./ChatInput.css";
import db from "../../firebase.js";
import { useStatValue } from "../../StateProvider";

function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStatValue();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!input) return false;
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message to ${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
