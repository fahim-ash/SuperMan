import sequelize from "../../config/database";
import User from "./user";

const db = {
    sequelize,
    User,
};

export default db;

// this code maintains connection pool when creating an instance
// sequelize auto optimizes connectio pool
// after an operation is complete, it automatically returns to active pool
