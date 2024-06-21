import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: process.env.database_name,
    username: process.env.username,
    password: process.env.password,
    host: process.env.host,
    port: process.env.port ? parseInt(process.env.port) : undefined, // ts cries when undefined not handled
    dialect: "postgres",
    logging: false,
});

export default sequelize;
