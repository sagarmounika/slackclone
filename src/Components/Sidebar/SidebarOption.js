import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";
import db from "../../firebase.js";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  
  const history = useHistory();
  const addChannel = () => {
    const channelName = prompt("Please enter a channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title} </h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
