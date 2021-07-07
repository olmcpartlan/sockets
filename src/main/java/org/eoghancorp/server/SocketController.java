package org.eoghancorp.server;

import org.eoghancorp.server.Models.Greeting;
import org.eoghancorp.server.Models.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
// import org.springframework.web.util.HtmlUtils;


@Controller
public class SocketController {
    @MessageMapping("/index")
    @SendTo("/topic/chatroom")
    public Greeting message(Message message) throws Exception {
        Thread.sleep(1000);
        System.out.println(message.getName());
        return new Greeting("SOMETHING FROM THE SERVER");

    }

}
