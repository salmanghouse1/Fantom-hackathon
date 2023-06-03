import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const sellAddresses = new Schema({
    address:String,
    isConnected:Boolean
  });


const sellAddressesVar = model('sellAddresses', sellAddresses);
export default sellAddressesVar;