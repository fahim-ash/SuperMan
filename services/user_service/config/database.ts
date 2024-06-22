import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
    database: process.env.database_name,
    username: process.env.user_name as string,
    password: process.env.password as string,
    host: process.env.host,
    port: process.env.port ? parseInt(process.env.port) : undefined, // ts cries when undefined not handled
    dialect: "postgres",
    logging: false,
});

export default sequelize;
