// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";



contract WalletAddressStorageContractBuyer {

    address owner;
    uint count;

    constructor()public{
        owner = msg.sender;
        count=0;
    }

    modifier onlyOwner (){
        require(msg.sender == owner);
        _;
    }

    struct user {
  address addr;
  string amounts;
  string returnAmounts;
  string tokenPair;
}

string[] walletAddresses;
    mapping(uint => user) public users; // contains a user for every address

    function addUser(uint _index,address _address,string memory amounts, string memory returnAmounts, string memory tokenPair) public onlyOwner {
        
        users[_index] = user(_address,amounts, returnAmounts, tokenPair);
       count++;
    }

       function getUser(uint _index) public view returns(address addr, string memory amounts, string memory returnAmounts,string memory tokenPair) {
         //if(users[_address].age == 0) throw;
        return (users[_index].addr, users[_index].amounts, users[_index].returnAmounts,users[_index].tokenPair);        
    }

 function userCount() public view returns(uint) { return count; }

// function getAllUser() public view returns(address[] memory,string memory,string[] memory, string[] memory){
//  address[]    memory addr = new address[](count);
//       string[]    memory amounts = new string[](count);
//       string[]  memory returnAmounts = new string[](count);
//         string[]  memory tokenPair = new string[](count);

// for(uint i=0;i<count;i++){
// user storage people = users[i];
// addr[i]=people.addr;
// amounts[i]=people.amounts;
// returnAmounts[i]=people.returnAmounts;
// tokenPair[i]=people.tokenPair;
// }
// return (addr,amounts,returnAmounts,tokenPair);

// }

function getPeople() public view returns (address[] memory, string[] memory,string[] memory,string[] memory){
      address[]    memory addr = new address[](count);
    //   string[]  memory name = new string[](count);
      string[]    memory amounts = new string[](count);
      string[]    memory returnAmounts = new string[](count);
    string[]    memory tokenPairs = new string[](count);
      
      for (uint i = 0; i < count; i++) {
          user storage people = users[i];
          addr[i] = people.addr;
          amounts[i] = people.amounts;
          returnAmounts[i] = people.returnAmounts;
          tokenPairs[i] = people.tokenPair;
      }

      return (addr,amounts,returnAmounts,tokenPairs);

  }



function getAllUsers() public view returns (user[] memory){
      user[]    memory id = new user[](count);
      for (uint i = 0; i < count; i++) {
          user storage people = users[i];
          id[i] = people;
      }
      return id;
  }

// Requires a public getter for array size


//        function getAllUsers() public view returns(string[] walletAddresses) {
//          //if(users[_address].age == 0) throw;
// // for(i = 0; i < k.size(); i++) {
// //     someFunc( k.users(k.addressLUT(i)) );
// // }            
// return walletAddresses;
//         }
    

    // function getUser(address _address) public view returns(string memory name, string memory surname, uint age) {
    //      //if(users[_address].age == 0) throw;
    //     return (users[_address].name, users[_address].surname, users[_address].age);        
    // }

    
// address[] walletAddresses;
    // string[] amounts;
   
// string[] returnAmounts;
// event WalletAddressAdded(address walletAddress);
//     event WalletAddressRemoved(address removeWalletAddress);
//     string ftmUsdt="FtmToUsdT";
//     // string[] tokenPair;
//     // Add a wallet address to the array

// event getAllAddressesEvent(address[] _walletAddressesAll, string[] _amountsAll, string[] _returnAmountsAll,string[] _tokenpairAll);


 
// function getUsers() public view returns (BuyerData[] memory) {
//   BuyerData[] memory buyerArray = new BuyerData[](buyers.length);

//   for (uint i = 0; i < buyers.length; i++) {
//     buyerArray[i] = buyers[i];
//   }

//   return buyerArray;
// }

// function addWalletAddress(address _walletAddress,string memory _amounts,string memory _returnAmounts,string memory _tokenPair) external {
//         require(_walletAddress != address(0), "Invalid wallet address");
//         mapping(address => BuyerData) public BuyerDatas;
//         BuyerData.addr=_walletAddress;
//         BuyerData.amounts=_amounts;
//         BuyerData.returnAmounts=_returnAmounts;
//         BuyerData.tokenPair=_tokenPair;
// BuyerData[] memory buyerArray = new BuyerData[](buyers.length);

//   for (uint i = 0; i < buyers.length; i++) {
//     buyerArray[i] = buyers[i];
//   }

//   return buyerArray;

    
//         // Emit event
//         emit WalletAddressAdded(_walletAddress);
//     }
// function removeWalletAddress(address _walletAddress) external {
//         require(_walletAddress != address(0), "Invalid wallet address");

//         for (uint256 i = 0; i < buyerArray.length; i++) {
//             if (buyerArray[i] == _walletAddress) {
//                 walletAddresses[i] = walletAddresses[walletAddresses.length - 1];
//                 walletAddresses.pop();
//                 amounts[i] = amounts[amounts.length - 1];
//                 amounts.pop();
//                 returnAmounts[i] = returnAmounts[returnAmounts.length - 1];
//                 returnAmounts.pop();
//                 tokenPair[i] = tokenPair[tokenPair.length - 1];
//                 tokenPair.pop();
                

//                 // Emit event
//                 emit WalletAddressRemoved(_walletAddress);

//                 break;
//             }
//         }
//     }
    // Get the total number of wallet addresses stored



    // function getWalletAddressCount() external view returns (uint256) {
    //     return walletAddresses.length;
    // }

    // Get a specific wallet address from the array


    // function getWalletAddress(uint256 _index) external view returns (address) {
    //     require(_index < walletAddresses.length, "Invalid index");

    //     return walletAddresses[_index];
    // }

    // function getAllWalletAddresses()public returns(string[],string[],string[]){
        
    //     emit getAllAddressesEvent(walletAddresses,amounts,returnAmounts,tokenPair);
    //    getUsers();
    //      }

//     function addWalletAddress(address _walletAddress,uint _amount,string memory _coinBuy) external{
//         require(_walletAddress != address(0), "Invalid wallet address");
//         WalletAddresesData memory locker = WalletAddresesData(_coinBuy,_amount);
//         dataByAddress[msg.sender].push(locker);
//         // convertAddress=_walletAddress.toString();
//         // walletAddressesAndAmounts.push(convertAddress,_amount);
//         // walletAddresses.push(_walletAddress.toString(),_amount.toString());
//         // Emit event
//         // emit WalletAddressAdded(_walletAddress);
//     }
// function removeWalletAddress(address _walletAddress,uint _index) external {
//         require(_walletAddress != address(0), "Invalid wallet address");

//         delete dataByAddress[msg.sender];

//         // for (uint256 i = 0; i < walletAddresses.length; i++) {
//             // if (walletaddresses[i] == _walletAddress) {
//             //     walletaddresses[i] = walletaddresses[walletAddresses.length - 1];
//             //     walletaddresses.pop();
//                 // Emit event
//                 emit WalletAddressRemoved(_walletAddress);
                
//             }
// // for (uint8 itwo = 0; itwo < walletAddresses.length; itwo++) { console.log("addresses after removing",walletAddresses[itwo]); }

// //         }
    
//     // Get the total number of wallet addresses stored
//     // function getWalletAddressCount() external view returns (uint) {
//     //     uint returnData=addHolder.length;
//     //     return returnData;
//     // }


//     function getUser(uint _index) public returns(string memory, uint) {
//         return (dataByAddress[msg.sender].coinBuy, dataByAddress[msg.sender].amount);
//     }

//     function getAllWalletAddresses() external view returns (address[] memory) {
        
//         return dataByAddress;
//     }


    address public tokenAddress; // Address of the ERC20 token being traded
 // Address of the contract owner

    mapping(address => uint256) public tokenBalances; // Mapping of token balances for each user

    event Trade(address indexed buyer, address indexed seller, uint256 quantity);

    

    // Buy tokens from the seller
    function buyTokens(address _seller, uint256 _quantity, string memory _token1) external {
        require(_seller != address(0), "Invalid seller address");
        require(_quantity > 0, "Invalid quantity");
        if(Strings.equal(_token1,"ftmUsdc")){
            
        IERC20 token = IERC20(tokenAddress);
        IERC20 token2 = IERC20(tokenAddress);
        
        require(token.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_seller, msg.sender, _quantity), "Token transfer failed");
        require(token2.transferFrom(msg.sender, _seller, _quantity), "Token transfer failed");

        require(token.balanceOf(_seller) >= _quantity, "Seller does not have enough tokens");

        // Transfer tokens from the seller to the buyer
        require(token.transferFrom(_seller, msg.sender, _quantity), "Token transfer failed");

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
        require(token2.transferFrom(msg.sender, _seller, _quantity), "Token transfer failed");

        // Update token balances
        tokenBalances[_seller] -= _quantity;
        tokenBalances[msg.sender] += _quantity;

        // Emit trade event
        emit Trade(msg.sender, _seller, _quantity);
        }
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

// Bellow is good code
}