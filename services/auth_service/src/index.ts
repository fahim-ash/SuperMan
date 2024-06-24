import express from "express";
import authRoutes from "./routes/authRoutes";
import bodyparser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyparser.json());
app.use("/auth", authRoutes); // use version later, example: /api/v1/auth/

app.listen(port, () => {
    console.log(`Auth server is running on ${port}`);
});
