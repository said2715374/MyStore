// Importer le modèle de Produit
import Produit from "../models/Produit.js";

// Récupérer la liste des produits
export const produitList = async (req, res) => {
    try {
        const produits = await Produit.findAll();
        res.status(200).json({ data: produits });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter un nouveau produit
export const addProduit = async (req, res) => {
    try {
        const nouveauProduit = await Produit.create(req.body);
        res.status(201).json({ message: "Produit créé avec succès", data: nouveauProduit });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un produit existant
export const updateProduit = async (req, res) => {
    const { id } = req.params;
    try {
        const produit = await Produit.findByPk(id);
        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }
        await produit.update(req.body);
        res.status(200).json({ message: "Produit mis à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un produit existant
export const removeProduit = async (req, res) => {
    const { id } = req.params;
    try {
        const produit = await Produit.findByPk(id);
        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }
        await produit.destroy();
        res.status(200).json({ message: "Produit supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
