import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Bar = sequelize.define('Bar', {
    name: {
        type: DataTypes.STRING,
        unique: true,
    },
    adresse: {
        type: DataTypes.STRING,
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
},{
        timestamps: false,
    });

export default Bar;