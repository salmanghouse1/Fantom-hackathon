const { AuthenticationError } = require('apollo-server-express');
const { buyAddressesVar,sellAddressesVar } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    buyAddresses: async () => {
      return await buyAddressesVar.find();
    },
    
    sellAddresses: async () => {
      return await sellAddressesVar.find();
    },
    
  },
  Mutation: {
    addBuyAddresses: async (parent, args) => {
      const user = await buyAddressesVar.create(args);
         },
    addSellAddresses: async (parent, { products }, context) => {
      const SellAddressUser = await buyAddressesVar.create(args);
    },
    
  }
};

module.exports = resolvers;
