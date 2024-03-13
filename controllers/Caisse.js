// Amener le modèle de Caisse
import {Caisse} from "../models/Relation.js";

// Lister tous les éléments de caisse
export const caisseList = async (req, res) => {
    try {
        const caisses = await Caisse.findAll();
        res.status(200).json({ data: caisses });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Créer un nouvel élément de caisse
export const addCaisse = async (req, res) => {
    const caisseData = req.body;
    try {
        const newCaisse = await Caisse.create(caisseData);
        res.status(201).json({ message: "La caisse a été créée avec succès", data: newCaisse });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un élément de caisse existant
export const updateCaisse = async (req, res) => {
    const { id } = req.params;
    const updatedCaisseData = req.body;
    try {
        const caisse = await Caisse.findByPk(id);
        if (!caisse) {
            return res.status(404).json({ message: "Cette caisse n'existe pas" });
        }
        await caisse.update(updatedCaisseData);
        res.status(200).json({ message: "Caisse mise à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un élément de caisse existant
export const removeCaisse = async (req, res) => {
    const { id } = req.params;
    try {
        const caisse = await Caisse.findByPk(id);
        if (!caisse) {
            return res.status(404).json({ message: "Cette caisse n'existe pas" });
        }
        await caisse.destroy();
        res.status(200).json({ message: `La caisse avec l'ID ${id} a été supprimée avec succès` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
