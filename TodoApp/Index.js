const express = require("express"); // require - it used to import
const app = express();

// listen on port 3000
// app.listen(3000, (re, req) => {
//   res.send("running on port http://localhost:3000");
// });

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parser json request body
app.use(express.json());

// import routes for Todo api
const todoRoutes = require("./routes/Todos");

// mount the todo api routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, (req, res) => {
  console.log(`server is started at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
  res.send(`<h1>This is Home Page body</h1>`);
});
