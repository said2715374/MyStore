import Fournisseur from "../models/Fournisseur.js";

//1.Creer Un fournisseur
function creerFournisseur(req, res) {
    const { nom, nomEntreprise } = req.body;
  
    try {
      const fournisseur = Fournisseur.create({
        nom,
        nomEntreprise,
      });
  
      res.status(201).json(fournisseur);
    } catch (error) {
      res.status(400).json({ erreur: error.message });
    }
  }
  //2.Fonction pour obtenir tous les fournisseurs
  function getAllFournisseurs(req, res) {
    try {
      const fournisseurs = Fournisseur.findAll();
  
      res.status(200).json(fournisseurs);
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }

//3.Fonction pour obtenir un fournisseur par son ID

  function getFournisseurById(req, res) {
    const { id } = req.params;
  
    try {
      const fournisseur = Fournisseur.findByPk(id);
  
      if (!fournisseur) {
        return res.status(404).json({ erreur: "Fournisseur introuvable" });
      }
  
      res.status(200).json(fournisseur);
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }
  
  //4. Mettre à jour un fournisseur
  function updateFournisseur(req, res) {
    const { id } = req.params;
    const { nom, nomEntreprise } = req.body;
  
    try {
      const fournisseur = Fournisseur.findByPk(id);
  
      if (!fournisseur) {
        return res.status(404).json({ erreur: "Fournisseur introuvable" });
      }
  
      fournisseur.nom = nom;
      fournisseur.nomEntreprise = nomEntreprise;
  
      fournisseur.save();
  
      res.status(200).json(fournisseur);
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }
  
  //5. Supprimer un fournisseur

  function deleteFournisseur(req, res) {
    const { id } = req.params;
  
    try {
      const fournisseur = Fournisseur.findByPk(id);
  
      if (!fournisseur) {
        return res.status(404).json({ erreur: "Fournisseur introuvable" });
      }
  
      fournisseur.destroy();
  
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }
  