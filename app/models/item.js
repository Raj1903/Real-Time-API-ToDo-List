'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 
let ItemSchema = new Schema({
  
  listId: {
    type: String,
    default: '',
  },
  itemId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },

  itemName: {
    type: String,
    default: ''
  },

  itemCreatorId: {
    type: String,
    default: ''
  },
  itemCreatorName: {
    type: String,
    default: ''
  },
  
  itemCreatedOn :{
    type:Date,
    default:""
  },
  
 

  itemDone:{
    type:String,
    default:'no'
  },

  

})


mongoose.model('Item', ItemSchema);