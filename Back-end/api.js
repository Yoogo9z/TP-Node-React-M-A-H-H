import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';

// import Bar from './models/bar.js';
// import './config/customConsole.js';

// Importation des routes
import barsRoutes from './routes/bars.js';
import bieresRoutes from './routes/bieres.js';
import commandesRoutes from './routes/commandes.js';
import biereCommandesRoutes from './routes/biereCommandes.js';


const app = express();

// Utilisation du middleware CORS
app.use(cors());

// Utilisation du middleware pour parser les JSON
app.use(express.json());

// Utilisation des routes
app.use('/bars',barsRoutes);
app.use('/bieres',bieresRoutes);
app.use('/commandes',commandesRoutes);
app.use('/biereCommandes',biereCommandesRoutes);

sequelize
  // Synchronisation des modèles avec la base de données
  .sync()
  .then(async () => {
    console.log('✅ Database & tables created!');
 
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });



// Démarrer le serveur
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});