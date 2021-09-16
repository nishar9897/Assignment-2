import React from "react";
import './App.css';
import ChatBody from "./components/chatBody/chatBody";
import Nav from "./components/nav/Nav";
import UserProfile from "./components/userProfile/userProfile";

function App() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
      </div>
  );
}

export default App;
