pragma solidity ^0.8.0;

contract helloworld{


    string public message;

    constructor() {
        message = "Hello, World!";
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}