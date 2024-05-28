import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Commande = sequelize.define('Commande', {
    name: {
        type: DataTypes.STRING,
    },
    prix: {
        type: DataTypes.FLOAT.MIN(0)
    },
    bars_id: {
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING,
    }
}, { timestamps: false })

export default Commande;