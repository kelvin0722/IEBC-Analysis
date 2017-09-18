require('dotenv').config()

var fs = require('graceful-fs');
const dookie = require('dookie');
const glob = require('glob');

//mongodb connection string
//create a sample db in mongodb
const connectionUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/test'

glob("./datafiles/*.json",(err,files)=>{
  files.map((file)=>{
    console.log(file);
      let data = JSON.parse(fs.readFileSync(file, 'utf8'));
      console.log(data);
      dookie.push(connectionUrl, data).then(()=> {
        console.log('done!');
      },(err)=>console.log(err));
  })
})