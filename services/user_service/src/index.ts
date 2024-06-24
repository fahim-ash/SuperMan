import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import db from "./models";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/users", userRoutes); // this is an instance of userRoutes I guess

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`server started, port ${port}`);
    });
});
