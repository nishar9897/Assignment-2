import React, { Component,createRef} from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:"https://lh3.googleusercontent.com/zOFYowVGcOlegbYW5GKoc2MVbLGugOKlbSOjb1_ef102K7hJuQl4QYgGFdiOX8I24wVn=s85",
      type: "",
      msg: "Hey prasanth",
      createdAt:new Date(Date.now())
    },
    {
      key: 2,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Hey Nishar",
      createdAt:new Date(Date.now())
    },
    
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      msg: "",
    };  
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      localStorage.setItem("msgs",JSON.stringify(this.chatItms));
      if (e.keyCode == 13) 
      {
        if (this.state.msg != "") 
        {
          let chatItms=this.state.chat;
          chatItms.push({
            key: chatItms.length+1,
            type: "",
            msg: this.state.msg,
            image:
            "https://lh3.googleusercontent.com/zOFYowVGcOlegbYW5GKoc2MVbLGugOKlbSOjb1_ef102K7hJuQl4QYgGFdiOX8I24wVn=s85",
            createdAt:new Date(Date.now())
          });
          this.setState({ chat: [...chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
          window.localStorage.setItem("msgs",JSON.stringify(chatItms));
        }
      }
    });
    this.scrollToBottom();
    let msgs=JSON.parse(window.localStorage.getItem("msgs")) || [];
    msgs=msgs.map(msg=>{
      msg.createdAt = new Date(msg.createdAt);
      return msg
      })
      this.setState({chat:msgs});
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <p>prasanth</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                  createdAt={itm.createdAt}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}