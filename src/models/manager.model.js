const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = new Schema({

	nom: {
		type: String,
		required: true
	},

	prenom: {
		type: String,
		required: true
	},

	email: {
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

module.exports = mongoose.model('Manager', managerSchema);