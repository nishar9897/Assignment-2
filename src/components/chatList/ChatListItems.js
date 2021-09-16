import React, { Component } from 'react';
import Avatar from "./Avatar";
class ChatListItems extends Component {
    render() {
        return (
            <div
            style={{ animationDelay: `0.${this.props.animationDelay}s` }}
            onClick={this.selectChat}
            className={`chatlist__item ${
              this.props.active ? this.props.active : ""
            } `}
          >
            <Avatar
              image={
                this.props.image ? this.props.image : "http://placehold.it/80x80"
              }
              isOnline={this.props.isOnline}
            />
    
            <div className="userMeta">
              <p>{this.props.name}</p>
              <span className="activeTime">32 mins ago</span>
            </div>
          </div>
         
        );
    }
}

export default ChatListItems;