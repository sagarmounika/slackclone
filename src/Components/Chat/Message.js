import React from "react";
import "./Message.css";
function Message({ user, userImage, timestamp, message }) {
  return (
    <div className="message">
      <img src={userImage} alt={user} />
      <div className="message_info">
        <h4>
          {user}{" "}
          <span className="message_timeStamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>{" "}
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
