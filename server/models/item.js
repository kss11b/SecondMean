var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
 title:{type: String, required: true, minlength: 5},
 author:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 users:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 description:{type: String, required: true, minlength: 10},
 status: {type:Boolean, default: false}


}, {timestamps: true})
var Item = mongoose.model('Item', ItemSchema);
