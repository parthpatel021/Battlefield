import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

//configure env
dotenv.config();

//databse config
connectDB();

const app = express();

//middelwares
app.use(cors());
app.use(express.json());


//routes
// app.use("/api/v1/contacts", contactsRoutes);

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(
      `Server Running on port ${PORT}`.bgCyan.white
    );
});