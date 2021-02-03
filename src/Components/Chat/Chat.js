import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./Chat.css";
import Message from './Message.js'
import ChatInput from './ChatInput.js';
import db from "../../firebase.js";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  console.log(roomDetails);
  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong> # {roomDetails?.name} </strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({message,user,userImage,timestamp}) => (
          <Message
           message= {message} timestamp={timestamp}
          user={user} userImage={userImage}/>
        ))}
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      </div>

    </div>
  );
}

export default Chat;
