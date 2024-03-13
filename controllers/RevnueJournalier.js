// Amener le modèle de RevnueJournalier
import {RevnueJournalier} from "../models/Relation.js";

// Lister tous les revenus journaliers
export const revenuJournalierList = async (req, res) => {
    try {
        const revenus = await RevnueJournalier.findAll();
        res.status(200).json({ data: revenus });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Créer un nouveau revenu journalier
export const addRevenuJournalier = async (req, res) => {
    const revenuData = req.body;
    try {
        const newRevenu = await RevnueJournalier.create(revenuData);
        res.status(201).json({ message: "Le revenu journalier a été créé avec succès", data: newRevenu });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un revenu journalier existant
export const updateRevenuJournalier = async (req, res) => {
    const { id } = req.params;
    const updatedRevenuData = req.body;
    try {
        const revenu = await RevnueJournalier.findByPk(id);
        if (!revenu) {
            return res.status(404).json({ message: "Ce revenu journalier n'existe pas" });
        }
        await revenu.update(updatedRevenuData);
        res.status(200).json({ message: "Revenu journalier mis à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un revenu journalier existant
export const removeRevenuJournalier = async (req, res) => {
    const { id } = req.params;
    try {
        const revenu = await RevnueJournalier.findByPk(id);
        if (!revenu) {
            return res.status(404).json({ message: "Ce revenu journalier n'existe pas" });
        }
        await revenu.destroy();
        res.status(200).json({ message: `Le revenu journalier avec l'ID ${id} a été supprimé avec succès` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
