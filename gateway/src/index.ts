import express from "express";
import bodyParser from "body-parser";
import gatewayRoutes from "./routes/gatewayRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use("/api", gatewayRoutes);

app.listen(port, () => {
    console.log(`Gateway server is running on ${port}`);
});
