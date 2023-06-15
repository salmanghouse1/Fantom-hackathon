// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
}

contract WalletAddressStorageContract {
    address[] public walletAddresses;

    event WalletAddressAdded(address indexed walletAddress);
    event WalletAddressRemoved(address removeWalletAddress);

    int newQuantity;


    // Add a wallet address to the array
    function addWalletAddress(address _walletAddress) external {
        require(_walletAddress != address(0), "Invalid wallet address");

        walletAddresses.push(_walletAddress);

        // Emit event
        emit WalletAddressAdded(_walletAddress);
    }
function removeWalletAddress(address _walletAddress) external {
        require(_walletAddress != address(0), "Invalid wallet address");

        for (uint256 i = 0; i < walletAddresses.length; i++) {
            if (walletAddresses[i] == _walletAddress) {
                walletAddresses[i] = walletAddresses[walletAddresses.length - 1];
                walletAddresses.pop();

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
    function getAllWalletAddresses() external view returns (address[] memory) {
        return walletAddresses;
    }


    address public tokenAddress; // Address of the ERC20 token being traded
    address public owner; // Address of the contract owner

    mapping(address => uint256) public tokenBalances; // Mapping of token balances for each user

    event Trade(address indexed buyer, address indexed seller, uint256 quantity);

    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
        owner = msg.sender;
    }

    // Buy tokens from the seller
    function buyTokens(address _seller, uint256 _quantity) external {
        require(_seller != address(0), "Invalid seller address");
        require(_quantity > 0, "Invalid quantity");

        IERC20 token = IERC20(tokenAddress);
        require(token.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_seller, msg.sender, _quantity), "Token transfer failed");

        // Update token balances
        tokenBalances[_seller] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _seller, _quantity);
    }

    // Sell tokens to the buyer
    function sellTokens(address _buyer, uint256 _quantity) external {
        require(_buyer != address(0), "Invalid buyer address");
        require(_quantity > 0, "Invalid quantity");

        IERC20 token = IERC20(tokenAddress);
        require(tokenBalances[msg.sender] >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transfer(_buyer, _quantity), "Token transfer failed");

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