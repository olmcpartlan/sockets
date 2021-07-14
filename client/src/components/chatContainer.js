import React, { Component } from 'react';
import { Header, Content, Button } from 'rsuite';


// stompClient.subscribe('/topic/chatroom', function (greeting) {

export default class ChatContainer extends Component {
  ws = new WebSocket("ws://localhost:8080/gs-guide-websocket/topic/chatroom/websocket")

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    }
    let message = null;

    this.ws.onmessage = evt => {
      // listen for data
      try {
        message = JSON.parse(evt.data)
        console.log(message);
      }
      catch { }

      // setState here or something
      console.log(message);
    }

    this.ws.onclose = () => {
      console.log("disconnected");
    }
  }

  sendMessage = () => {
    const data = "{ 'name': 'a name', 'message': 'a message' }";
    console.log('sending message');
    console.log(data);
    this.ws.send(data);
  }

  render() {
    return (
      <div className="chat-page">
        <Header>
          <h2>Page Title</h2>
          <Button onClick={this.sendMessage}>Send Something</Button>
        </Header>
        <div className="chat-container">
          {/* chat will go here */}
        </div>
      </div>
    )
  }

}