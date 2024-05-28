import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BiereCommande = sequelize.define('BiereCommande', {

    biere_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    commande_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

export default BiereCommande;