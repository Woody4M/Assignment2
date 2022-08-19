

let myhttp= require("http");
myhttp.createServer(
  function( myrequest, myresponse ){
    console.log( myrequest.url);
    let mytext;
    if(myreuqest.url==="/hey"){
      let mytext="Well hello there...";
    }
    else{
      let mytext="i dont know you!";
      
    }
    myresponse.writeHead( 200, {"Content-type": "text/plain"});
    myresponse.end("hello Everyone!\n");
  }
);
 myserver.listen(8080,"0.0.0.0");
console.log("server has started");