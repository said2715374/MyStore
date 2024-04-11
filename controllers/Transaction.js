// Importer le modèle de Transaction
import Transaction from "../models/Transaction.js";

// Récupérer la liste des transactions
export const transactionList = async (req, res) => {
    try {
        const transactions = await Transaction.findAll();
        res.status(200).json({ data: transactions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter une nouvelle transaction
export const addTransaction = async (req, res) => {
    try {
        const nouvelleTransaction = await Transaction.create(req.body);
        res.status(201).json({ message: "Transaction créée avec succès", data: nouvelleTransaction });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour une transaction existante
export const updateTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await Transaction.findByPk(id);
        if (!transaction) {
            return res.status(404).json({ message: "Transaction non trouvée" });
        }
        await transaction.update(req.body);
        res.status(200).json({ message: "Transaction mise à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer une transaction existante
export const removeTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await Transaction.findByPk(id);
        if (!transaction) {
            return res.status(404).json({ message: "Transaction non trouvée" });
        }
        await transaction.destroy();
        res.status(200).json({ message: "Transaction supprimée avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
