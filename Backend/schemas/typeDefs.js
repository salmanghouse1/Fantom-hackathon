const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type BuyAddresses {
    _id: ID
    address: String
    isConnected:Boolean
  }

  type SellAddresses {
    _id: ID
    address: String
    isConnected:Boolean
  }


  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    queryBuyAddresses:BuyAddresses
    querySellAddresses:SellAddresses
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addBuyAddress(myAddress:String)
    addSellAddress(myAddress:String)
  }
`;

module.exports = typeDefs;
