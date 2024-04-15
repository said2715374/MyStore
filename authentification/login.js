// Importer les dépendances nécessaires
import {Utilisateur} from "../models/Relation.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    // Récupération des résultats de la validation 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Récupération des informations de connexion
    const { Email, Mot_de_passe } = req.body;

    // Vérification de l'email
    try {
        const utilisateur = await Utilisateur.findOne({ where: { Email } });

        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        // Vérification du mot de passe
        const mdpValide = (Mot_de_passe == utilisateur.MotDePasse );
        if (!mdpValide) {
            return res.status(401).json({ message: "Mot de passe incorrect." });
        }

        // Création du token
        const payload = { id: utilisateur.id };
        const token = jwt.sign(payload, process.env.CODE_SECRET, { expiresIn: '1h' });

        res.status(200).json({ utilisateur: utilisateur, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
