const mongoose = require('mongoose');

const options = {};

const initConnectionDB = async ()=> {
	try{
		await mongoose.connect(process.env.MONGO_URI,options) ;
		console.log("Connection to mongoDB succeded ");
	}catch(error){
		console.log(error.message);
		throw(error);
	}
}
module.exports = initConnectionDB ;