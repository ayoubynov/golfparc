const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golfSchema = new Schema({

	titre: {
		type: String,
		required: true
	},

	latitude: {
		type: Number,
		required: true
	},

	longitude: {
		type: Number,
		required: true
	},

	description: {
		type: String,
		required: true
    },
    
    telephone: {
        type: Number,
        required: true
    },
},{
	timestamps:true
});

module.exports = mongoose.model('Golf', golfSchema);