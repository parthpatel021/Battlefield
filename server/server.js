import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import b4Routes from "./routes/b4Routes.js"

//configure env
dotenv.config();

//databse config
connectDB();

const app = express();

//middelwares
app.use(cors());
app.use(express.json());


// routes
app.use("/b4", b4Routes); // battleField 4 routes 

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});