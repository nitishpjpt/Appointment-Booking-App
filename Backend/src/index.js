import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./DB/db.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT);
    console.log(`Server is Working on localhost:${process.env.PORT}`);
  })
  .catch((error) => {
    console.log(error, "Server is not listning");
  });
