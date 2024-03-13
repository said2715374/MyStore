// Amener le modèle de rôle avec les relations
import Role from "../models/Role.js";

// Lister tous les rôles
export const roleList = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({ data: roles });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Créer un nouveau rôle
export const addRole = async (req, res) => {
    const roleData = req.body;
    try {
        const newRole = await Role.create(roleData);
        res.status(201).json({ message: "Le rôle a été créé avec succès", data: newRole });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un rôle existant
export const updateRole = async (req, res) => {
    const { id } = req.params;
    const updatedRoleData = req.body;
    try {
        const role = await Role.findByPk(id);
        if (!role) {
            return res.status(404).json({ message: "Ce rôle n'existe pas" });
        }
        await role.update(updatedRoleData);
        res.status(200).json({ message: "Rôle mis à jour avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un rôle existant
export const removeRole = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findByPk(id);
        if (!role) {
            return res.status(404).json({ message: "Ce rôle n'existe pas" });
        }
        await role.destroy();
        res.status(200).json({ message: `Le rôle avec l'ID ${id} a été supprimé avec succès` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
