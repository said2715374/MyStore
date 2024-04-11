import { Router } from "express";
import {getFournisseursByProduit, getProduitsByFournisseur, addFournisseurToProduit,removeFournisseurFromProduit, getProduitsByFournisseurWithDetails} from "../controllers/FourProd.js"

const fourProdRouter = Router();
// Définir les routes
fourProdRouter.get('/produits/:id/fournisseurs', getFournisseursByProduit);
fourProdRouter.get('/fournisseurs/:id/produits', getProduitsByFournisseur);
fourProdRouter.post('/produits/fournisseurs', addFournisseurToProduit);
fourProdRouter.delete('/produits/fournisseurs', removeFournisseurFromProduit);
fourProdRouter.get('/fournisseurs/:id/produits/details', getProduitsByFournisseurWithDetails);

export default fourProdRouter;
