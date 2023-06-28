// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract FTMtoUSDT {
    address private constant FTM_ADDRESS = 0x...;  // Replace with the FTM token contract address
    address private constant USDT_ADDRESS = 0x...; // Replace with the USDT token contract address
    
    IERC20 private ftmToken;
    IERC20 private usdtToken;
    
    event Swap(address indexed sender, uint256 ftmAmount, uint256 usdtAmount);
    
    constructor() {
        ftmToken = IERC20(FTM_ADDRESS);
        usdtToken = IERC20(USDT_ADDRESS);
    }
    
    function swapFTMToUSDT(uint256 ftmAmount) external {
        require(ftmAmount > 0, "FTM amount must be greater than zero");
        
        // Calculate the USDT amount to receive based on the exchange rate
        uint256 usdtAmount = ftmAmount * exchangeRate();
        
        // Transfer FTM tokens from the sender to this contract
        ftmToken.transferFrom(msg.sender, address(this), ftmAmount);
        
        // Transfer USDT tokens from this contract to the sender
        usdtToken.transfer(msg.sender, usdtAmount);
        
        emit Swap(msg.sender, ftmAmount, usdtAmount);
    }
    
    function exchangeRate() public pure returns (uint256) {
        // Replace with the exchange rate calculation logic based on the current market rate
        return 100; // Example rate: 1 FTM = 100 USDT
    }
}