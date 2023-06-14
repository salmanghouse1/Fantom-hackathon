// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WalletAddressStorageContract {
    address[] public walletAddresses;

    event WalletAddressAdded(address indexed walletAddress);

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
}
