import React, { Component } from 'react';
import { Header, Content, Button } from 'rsuite';


export default class ChatContainer extends Component {
  ws = new WebSocket("ws://localhost:8080/gs-guide-websocket/websocket")

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    }

    this.ws.onmessage = evt => {
      // listen for data
      const message = JSON.parse(evt.data)
      // setState here or something
      console.log(message);
    }

    this.ws.onclose = () => {
      console.log("disconnected");
    }
  }

  sendMessage = () => {
    const data = JSON.stringify({ 
      'name': 'a name', 
      'message': 'a message' 
    })
    console.log('sending message');
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