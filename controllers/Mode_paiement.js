// Importer le modèle de Mode_paiement
import Mode_paiement from "../models/Mode_paiement.js";

// Récupérer la liste des modes de paiement
export async function modePaiementList(req, res) {
    try {
        const modesPaiement = await Mode_paiement.findAll();
        res.status(200).json({ data: modesPaiement });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter un nouveau mode de paiement
export async function addModePaiement(req, res) {
    try {
        const nouveauModePaiement = await Mode_paiement.create(req.body);
        res.status(201).json({ message: "Mode de paiement créé avec succès", data: nouveauModePaiement });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un mode de paiement existant
export async function updateModePaiement(req, res) {
    const { id } = req.params;
    try {
        const modePaiement = await Mode_paiement.findByPk(id);
        if (!modePaiement) {
            return res.status(404).json({ message: "Mode de paiement non trouvé" });
        }
        await modePaiement.update(req.body);
        res.status(200).json({ message: "Mode de paiement mis à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un mode de paiement existant
export async function removeModePaiement(req, res) {
    const { id } = req.params;
    try {
        const modePaiement = await Mode_paiement.findByPk(id);
        if (!modePaiement) {
            return res.status(404).json({ message: "Mode de paiement non trouvé" });
        }
        await modePaiement.destroy();
        res.status(200).json({ message: "Mode de paiement supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
