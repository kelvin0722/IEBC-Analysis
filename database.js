require('dotenv').config();

var fs = require('graceful-fs');
const dookie = require('dookie');
const glob = require('glob');


var MongoClient = require('mongodb').MongoClient;
//mongodb connection string
//create a sample db in mongodb
const connectionUrl =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/test';

MongoClient.connect(connectionUrl, (err, db)=>{
  if(err){ 
    console.log("Please check you db connection parameters");
  }else{
    console.log("Connection success");
    // here we are going to write code for file
    glob('./datafiles/BOJ_GET/*.json', (err, files) => {
    files.map(file => {
    let data = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(data);
    var collection = db.collection('Candidate_Results');
    collection.insert(data, (err, result) => {
      if(err){
        console.log(err);
      }else {
        console.log(result);
      }
    });
  });

});
  }
});







