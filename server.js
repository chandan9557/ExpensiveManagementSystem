const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const db = require("./config/db");

//dotenv ko config krna prta h top me jb kchh v .env me lkhte h to
dotenv.config();
// database ko call kr lnge
db();
const app = express();

// middleware
app.use(morgan("dev"));
const corsOption={
  origin:'http://localhost:3000',
  method:'GET,POST,PUT,PATCH,HEAD',
  credential:true
}
app.use(cors(corsOption));
app.use(express.json());

// routes
app.use('/',require('./routes/userRoute'))
//port
const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`my server started port no ${PORT}`);
});
