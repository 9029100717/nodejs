//var express=require('express');
//var app=express();

//app.get('/',function(req,res){
  //  res.send("hello world");
//});

//app.get('/users',function(req,res){
  //  console.log("got a get request for page user");
    //res.send("user page");
//});


//app.get('/:id',function(req,res){
  //  console.log("the id you specified is:");
    //res.send('the id you specified is:'+ req.parans.id);
//});
//app.listen(2000,function(){
  //  console.log("server started...");

//});

//callback function

console.log("user 1 send the request to the database");
setTimeout(callback,5000);

console.log("user 2 send the request to the database");
setTimeout(callback,5000);

console.log("user 3 send request to the database");
setTimeout(callback,5000);

function callback(){
    console.log("queried the database and delever the data in 5 second");
}

exports.myhandeler=fuction(event, context, callback){
    console.log("value1=" + event.key1);
    console.log("value2=" + event.key2);
    callback(null, "some success message");
}