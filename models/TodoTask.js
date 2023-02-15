const mongoose = require('mongoose');

// Jacksonian concept - JSON schema! 
const todoTaskSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true
	},
	date: {
		type: Date,
	default: Date.now
	}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema);