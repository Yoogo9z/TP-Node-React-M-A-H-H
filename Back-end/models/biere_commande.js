import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Biere_commande = sequelize.define('Biere', {

    biere_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    commande_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

export default Biere_commande;