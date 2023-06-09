pragma solidity ^0.8.0;

contract helloworld{

event MessageLogged(string message);


    

    function setMessage(string memory newMessage) public {
        
        emit MessageLogged(newMessage);
    }

}