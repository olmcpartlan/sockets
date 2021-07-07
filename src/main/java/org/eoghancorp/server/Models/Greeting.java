package org.eoghancorp.server.Models;

public class Greeting {
    private String content;

    public Greeting() {}
    public Greeting(String content) {
        this.content = content;
        System.out.println("CONTENT FROM CLIENT: " + this.content);
    }

    public String getContent() {
        return content;
    }

}
