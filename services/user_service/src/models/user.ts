import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string; // password will be hashed by bycrypt
    public createdAt!: Date;
    public updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: "User",
        timestamps: true,
        updatedAt: "updatedAt",
        hooks: {
            beforeUpdate: (user, options) => {
                user.updatedAt = new Date();
            },
            beforeSave: (user, optons) => {
                console.log(user.name, user.createdAt, user.updatedAt); // check any data here
            },
        },
    }
);

User.sync({}); // have to try User.sync({ alter: true })

export default User;
