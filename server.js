const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");
dotenv.config({path:"config/config.env"});


connectDatabase();



app.listen(process.env.PORT, ()=>{
    console.log(`Server running on PORT ${process.env.PORT}`)
});