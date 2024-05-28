import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Biere = sequelize.define('Biere', {

    name: {
        type: DataTypes.STRING,

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,


    }, degree: {
        type: DataTypes.FLOAT,

    },

    prix: {
        type: DataTypes.FLOAT,
        min: 0,

    },
    bars_id: {
        type: DataTypes.INTEGER,

    },

}, { timestamps: false })

export default Biere;