// import { useContext } from "react";
import { IoVideocam } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import Messages from "./messages/Messages";
import Input from "./input/Input";
// import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  // const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>displayName</span>
        <div className="chatIcons">
          <IoVideocam />
          <BsFillPeopleFill />
          <BsThreeDots />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
