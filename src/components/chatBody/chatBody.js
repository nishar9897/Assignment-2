import React, { Component } from 'react';
import ChatContent from '../chatContent/chatContent';
import ChatList from '../chatList/chatList';
import UserProfile from '../userProfile/userProfile';
import "./chatBody.css";
class chatbody extends Component {
    render() {
        return (
            <div className="main__chatbody">
                <ChatList />
                <ChatContent />
                <UserProfile />
                
            </div>
        );
    }
}
export default chatbody;