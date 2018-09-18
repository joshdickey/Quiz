"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/answerHub").build();

connection.on("ReceiveMessage", function (green, red, black) {

    var msg = "Green: " + green + " Red: " + red + " Black: " + black;
    
    var encodedMsg = msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("answerList").appendChild(li);
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {


    var answer = 0;

    if (document.getElementById("green").checked) {
        answer = 0;

    } else if (document.getElementById("red").checked) {
        answer = 1;
    } else if (document.getElementById("black").checked) {
        answer = 2;
    } else {
        answer = 3;
    }


    connection.invoke("SendAnswer", answer).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});