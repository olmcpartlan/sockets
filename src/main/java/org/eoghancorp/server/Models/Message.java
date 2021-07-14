package org.eoghancorp.server.Models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Message {
    @JsonProperty("name")
    private String name;
    @JsonProperty("message")
    private String message;

    public Message() {}

    public Message(String name, String message) {
        this.name = name;
        this.message = message;
    }

    public String getName() {
        return this.name;
    }

    public String getMessage() {
        return message;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
