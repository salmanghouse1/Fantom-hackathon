# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

To Deploy contracts:
* npx hardhat run --network testnet scripts/deploy.js

or go to:https://github.com/Fantom-foundation/example-deployment

0x5C066A4E673EfDc91c7c9880f068B95752119994
0x06B44B5FAC809723C58c74B0A2315BF70BaF6cE8

Buyer1 deployed to:0x281F36D0B27AE554720fb3250646082631010D5A
contract2 deployed to:0x76951647E998F4802ECfB1A3ACADc27400Dfe074
contract3 deployed to:0x9572Ae27eFD7b11F3c56B570D94BCE7B0C3A21b5
contract4 deployed to:0x87f23361137baE1351191d2aD799b3f081fbc8dd


contract1 deployed to:0x2ab601bA382b64E2aFDA445210B1B71F6bEE7135
contract2 deployed to:0x82956f96Df16ee92049Fa83ae5a2B13AeF12B0f6
contract3 deployed to:0xFBF63fD42ab8fdED1B98440389acCC60fc748922
contract4 deployed to:0x846A6e629328cD7b023441217db897566b46C8dF
contract4 deployed to:0x006E132e20Fd8D38689323216863C7c20dc54761

check https://ethereum.stackexchange.com/questions/3609/returning-a-struct-and-reading-via-web3/3614#3614

for returning multiple type array in smart contracts, pop and push wont work

contract1 deployed to:0x57Bf94f2b52A441E040A3874F1e553d373A9de95
contract2 deployed to:0x8EF26aDdCe35A7Bc45288b5f05c4A9312EA94E3D
contract3 deployed to:0x5edeD43ed690c3fe61E166908A811B2613C1e6AA
contract4 deployed to:0xe3f3be633221957ca563A1cd8Cdf4cA9c50793F9
contract4 deployed to:0x3767f0e38F85c65482844be1f54bB3573a8524BC




string name;
uint age;
string passion;
}

uint256 id;

mapping(uint256 =&amp;gt; Myself) myself;

// Make sure the ID is associated with the mapping.

// Now create a read function to read the data from struct since struct can&#039;t be read directly

function readStructData() public view returns(string, uint, string) {
return myself[id].name, myself[id].age, myself[id].passion;
}```


You need to first assign an ID and then map through with that ID in the code.

After that you can set the mapping of the contract as public and loop through it in the frontend by passing in the id that you used to map through and that should fetch all the objects for all the ids.