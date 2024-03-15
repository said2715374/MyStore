// Importer le modèle de Magasin
import Magasin from "../models/Magasin.js";

// Récupérer la liste des magasins
export const magasinList = async (req, res) => {
    try {
        const magasins = await Magasin.findAll();
        res.status(200).json({ data: magasins });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter un nouveau magasin
export const addMagasin = async (req, res) => {
    try {
        const nouveauMagasin = await Magasin.create(req.body);
        res.status(201).json({ message: "Magasin créé avec succès", data: nouveauMagasin });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un magasin existant
export const updateMagasin = async (req, res) => {
    const { id } = req.params;
    try {
        const magasin = await Magasin.findByPk(id);
        if (!magasin) {
            return res.status(404).json({ message: "Magasin non trouvé" });
        }
        await magasin.update(req.body);
        res.status(200).json({ message: "Magasin mis à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un magasin existant
export const removeMagasin = async (req, res) => {
    const { id } = req.params;
    try {
        const magasin = await Magasin.findByPk(id);
        if (!magasin) {
            return res.status(404).json({ message: "Magasin non trouvé" });
        }
        await magasin.destroy();
        res.status(200).json({ message: "Magasin supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
