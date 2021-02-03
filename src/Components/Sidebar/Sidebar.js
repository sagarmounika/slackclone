import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SideBarOption from "./SideBarOption.js";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentRoundedIcon from "@material-ui/icons/InsertCommentRounded";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from '../../firebase.js'
import { useStatValue } from "../../StateProvider";

function Sidebar() {
  const [{ user }] = useStatValue();
  const [channels, setChannels] = useState([]);
  useEffect(() => {
   db.collection('rooms').onSnapshot((snapshot) => {
     setChannels(
      snapshot.docs.map(doc=>(
        {id:doc.id,
        name:doc.data().name}
      )));
   })
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Product Engineering</h2>
          <h3>
            <FiberManualRecordRoundedIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentRoundedIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
   {channels.map(channel=>(
     <SidebarOption id={channel.id} title={channel.name}/>
   ))}
    </div>
  );
}

export default Sidebar;
