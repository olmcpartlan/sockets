package org.eoghancorp.server;

import org.eoghancorp.server.Models.Greeting;
import org.eoghancorp.server.Models.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {
    @MessageMapping("/index")
    @SendTo("/topic/chatroom")
    public Greeting message(Message message) throws Exception {
        System.out.println("NAME: " + message.getName());
        System.out.println("CONTENT: " + message.getMessage());

        return new Greeting(message.getName());

    }

}
