import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const buyAddresses = new Schema({
    addresses:[String],
  });



const buyAddressesVar = model('buyAddresses', buyAddresses);
export default buyAddressesVar;