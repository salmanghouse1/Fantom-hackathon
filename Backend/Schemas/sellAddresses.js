import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const sellAddresses = new Schema({
    addresses:[String],
  });


const sellAddressesVar = model('sellAddresses', sellAddresses);
export default sellAddressesVar;