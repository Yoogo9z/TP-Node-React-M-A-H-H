import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import seedDatabase from './config/seed.js';
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
  .sync({ force: true })
  .then(async () => {
    console.log('✅ Database & tables created!');
    // Vérifier s'il y a 0 enregistrement dans la table bar
    // const barCount = await Bar.count();
    // if (barCount === 0) {
    //   console.log('No bar found, seeding database...');
    //   await seedDatabase();
    // }
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Définir le port d'écoute
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ API Server is running on port ${PORT}`);
});