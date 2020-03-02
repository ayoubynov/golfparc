const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

	nom: {
		type: String,
		required: true
	},

	prenom: {
		type: String,
		required: true
	},

	Role: {
		type: String,
		required: true
	},

	mail: {
		type: String,
		required: true
    },
    
    motdepasse: {
        type: String,
        required: true
    },

    Admin: {
        type: Boolean,
        required: true
    },
},{
	timestamps:true
});

module.exports = mongoose.model('Admin', adminSchema);