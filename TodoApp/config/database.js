const mongoose = require("mongoose");

require("dotenv").config();
// ish se , env me likha hua code process object me map ho jata hai

// function that create db connection
const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Db is connected successfully");
    })
    .catch((err) => {
      console.log("Error connecting to database ");
      console.error(err.message);
      process.exit(1); //? what is this ?
    });
};

module.exports = dbConnect; // export function dbConnect
