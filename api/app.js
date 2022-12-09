const express = require('express');
const connect  = require('./db/connect');

const app = express();

const port = process.env.PORT || 3000 ;

app.use(express.static('./public'));

app.get('/',(req,res)=> res.redirect('/index.html'));

const start = async ()=> {
  try {
    await connect();
    app.listen(port,()=>{
      console.log(`Server listening on port ${port}...`);
    })
  }catch(error){
    console.log(error.message);
  }
}
start();

