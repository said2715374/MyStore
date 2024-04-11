import express from 'express';
const produitRouter = express.Router();

// Importer vos fonctions du contrôleur de Produit ici
import { produitList, addProduit, updateProduit, removeProduit } from '../controllers/Produit.js';

// Définir les routes
produitRouter.get('/produits', produitList);
produitRouter.post('/produits', addProduit);
produitRouter.put('/produits/:id', updateProduit);
produitRouter.delete('/produits/:id', removeProduit);

export default produitRouter;
