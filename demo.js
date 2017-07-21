var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send("hello world");
});

app.get('/users',function(req,res){
    console.log("got a get request for page user");
    res.send("user page");
});


app.get('/:id',function(req,res){
    console.log("the id you specified is:");
    res.send('the id you specified is:'+ req.parans.id);
});
app.listen(2000,function(){
    console.log("server started...");

});