import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const buyAddresses = new Schema({
    address:String,
    isConnected:Boolean
  });



const buyAddressesVar = model('buyAddresses', buyAddresses);
export default buyAddressesVar;