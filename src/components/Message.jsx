// import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  return (
    <div className={`message owner`}>
      <div
        // ref={ref}
        className="message"
      >
        <div className="messageInfo">
          <img
            src={
              "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
            }
            alt=""
          />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>message text</p>
          <img
            src={
              "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
