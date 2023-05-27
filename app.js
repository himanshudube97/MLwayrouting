const express = require("express");
const morgan = require("morgan");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

const blogRoutes = require("./routes/blogRoutes");

blogRoutes(app);
app.use(errorMiddleware);
module.exports = app;





// function hello(fun){    //this function is blogRoutes which take app object as a parameter.
//     fun.name(" dube")    //app.get()
//     fun.what(" kuch nahi bhai")
//   }
  
//   const funcObject = {  //it is similar to app which is express();
//     name: function(a){    //similar to get()
//       console.log("himanshu"+ a)
//     },
//     what: function(b){   //similar to get() post() etc methods.
//       console.log("nothing bro"+ b)
//     }
//   }
  
//   hello(funcObject);   //blogRoutes(app);