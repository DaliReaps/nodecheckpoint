var fs = require("fs");
var buf = new Buffer.alloc(1024);


   fs.readFile("hello.txt","utf8",  function(err,data){
      if (err){
         console.log(err);
      }
      console.log(data );
   });
