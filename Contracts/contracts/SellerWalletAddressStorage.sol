// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract WalletAddressStorageContractSeller {
    address[] public walletAddresses;
    uint[] amounts;
    uint[] returnAmounts;
    string[] tokenPair;
    event WalletAddressAdded(address indexed walletAddress);
event WalletAddressRemoved(address removeWalletAddress);
    // Add a wallet address to the array
    function addWalletAddress(address _walletAddress,uint _amounts,uint _returnAmount,string memory _tokenPair) external {
        require(_walletAddress != address(0), "Invalid wallet address");

        walletAddresses.push(_walletAddress);
        amounts.push(_amounts);
        returnAmounts.push(_returnAmount);
        tokenPair.push(_tokenPair);
        // Emit event
        emit WalletAddressAdded(_walletAddress);
    }
function removeWalletAddress(address _walletAddress) external {
        require(_walletAddress != address(0), "Invalid wallet address");

        for (uint256 i = 0; i < walletAddresses.length; i++) {
            if (walletAddresses[i] == _walletAddress) {
                walletAddresses[i] = walletAddresses[walletAddresses.length - 1];
                walletAddresses.pop();
                amounts[i] = amounts[amounts.length - 1];
                amounts.pop();
                returnAmounts[i] = returnAmounts[returnAmounts.length - 1];
                returnAmounts.pop();
                tokenPair[i] = tokenPair[tokenPair.length - 1];
                tokenPair.pop();
                
                // Emit event
                emit WalletAddressRemoved(_walletAddress);

                break;
            }
        }
    }
    // Get the total number of wallet addresses stored
    function getWalletAddressCount() external view returns (uint256) {
        return walletAddresses.length;
    }

    // Get a specific wallet address from the array
    function getWalletAddress(uint256 _index) external view returns (address) {
        require(_index < walletAddresses.length, "Invalid index");

        return walletAddresses[_index];
    }
    function getAllWalletAddresses() external view returns (address[] memory,uint[] memory,uint[] memory,string[] memory) {
        return (walletAddresses,amounts,returnAmounts,tokenPair);
    }
    
    address public tokenAddress; // Address of the ERC20 token being traded
    address public owner; // Address of the contract owner

    mapping(address => uint256) public tokenBalances; // Mapping of token balances for each user

    event Trade(address indexed buyer, address indexed seller, uint256 quantity);

    

    // Buy tokens from the seller
    function buyTokens(address _seller, uint256 _quantity,string memory _token1) external {
        require(_seller != address(0), "Invalid seller address");
        require(_quantity > 0, "Invalid quantity");
if(Strings.equal(_token1,"ftmUsdc")){
        IERC20 token = IERC20(tokenAddress);
        IERC20 token2 = IERC20(tokenAddress);

        require(token.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_seller, msg.sender, _quantity), "Token transfer failed");

         require(token2.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token2.transferFrom(msg.sender, _seller, _quantity), "Token transfer failed");


        // Update token balances
        tokenBalances[_seller] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _seller, _quantity);
}
else if(Strings.equal(_token1,"UsdcFtm")){
        IERC20 token = IERC20(tokenAddress);
        IERC20 token2 = IERC20(tokenAddress);

        require(token.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_seller, msg.sender, _quantity), "Token transfer failed");

         require(token2.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token2.transferFrom(msg.sender, _seller, _quantity), "Token transfer failed");


        // Update token balances
        tokenBalances[_seller] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _seller, _quantity);

}
else if(Strings.equal(_token1,"ftmEth")){
        IERC20 token = IERC20(tokenAddress);
        
        IERC20 token2 = IERC20(tokenAddress);

        require(token.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_seller, msg.sender, _quantity), "Token transfer failed");

         require(token2.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token2.transferFrom(msg.sender, _seller, _quantity), "Token transfer failed");

        // Update token balances
        tokenBalances[_seller] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _seller, _quantity);

}
    }

    // Sell tokens to the buyer
    function sellTokens(address _buyer, uint256 _quantity, string memory _token1) external {
        require(_buyer != address(0), "Invalid buyer address");
        require(_quantity > 0, "Invalid quantity");


if(Strings.equal(_token1,"ftmUsdt")){
        
        IERC20 token = IERC20(tokenAddress);

        IERC20 token2 = IERC20(tokenAddress);

        require(token.balanceOf(_buyer) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_buyer, msg.sender, _quantity), "Token transfer failed");

         require(token2.balanceOf(msg.sender) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token2.transferFrom(msg.sender, _buyer, _quantity), "Token transfer failed");


        // Update token balances
        tokenBalances[_buyer] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _buyer, _quantity);
}
else if(Strings.equal(_token1,"UsdtFtm")){
        IERC20 token = IERC20(tokenAddress);
        IERC20 token2 = IERC20(tokenAddress);

        require(token.balanceOf(_buyer) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_buyer, msg.sender, _quantity), "Token transfer failed");

         require(token2.balanceOf(_buyer) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token2.transferFrom(msg.sender, _buyer, _quantity), "Token transfer failed");


        // Update token balances
        tokenBalances[_buyer] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _buyer, _quantity);

}
else if(Strings.equal(_token1,"ftmEth")){
        IERC20 token = IERC20(tokenAddress);
        
        IERC20 token2 = IERC20(tokenAddress);

        require(token.balanceOf(_buyer) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_buyer, msg.sender, _quantity), "Token transfer failed");

         require(token2.balanceOf(_buyer) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token2.transferFrom(msg.sender, _buyer, _quantity), "Token transfer failed");

        // Update token balances
        tokenBalances[_buyer] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _buyer, _quantity);

}


        // Update token balances
        tokenBalances[msg.sender] -= _quantity;
        tokenBalances[_buyer] += _quantity;

        // Emit trade event
        emit Trade(_buyer, msg.sender, _quantity);
    }

    // Withdraw any remaining tokens back to the owner
    function withdrawTokens() external {
        require(msg.sender == owner, "Only the contract owner can withdraw tokens");

        IERC20 token = IERC20(tokenAddress);
        uint256 remainingBalance = token.balanceOf(address(this));
        require(remainingBalance > 0, "No tokens to withdraw");
        require(token.transfer(owner, remainingBalance), "Token transfer failed");
    }

    // Withdraw any remaining ether back to the owner
    function withdrawEther() external {
        require(msg.sender == owner, "Only the contract owner can withdraw Ether");

        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No Ether to withdraw");

        (bool success, ) = owner.call{value: contractBalance}("");
        require(success, "Ether transfer failed");
    }

    // Allow users to deposit tokens into the contract
    function depositTokens(address walletAddressToDeposit,uint256 _quantity) external {
        require(_quantity > 0, "Invalid quantity");

        IERC20 token = IERC20(tokenAddress);

        // Transfer tokens from the user to the contract
        require(token.transferFrom(msg.sender, walletAddressToDeposit,_quantity));
}
}
