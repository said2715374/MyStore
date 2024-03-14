//1.Creer Un Produit
function creerProduit(req, res) {
    const { nom, dateEntree, dateExpiration, quantite, prix } = req.body;
  
    try {
      const produit = Produit.create({
        nom,
        dateEntree,
        dateExpiration,
        quantite,
        prix,
      });
  
      res.status(201).json(produit);
    } catch (error) {
      res.status(400).json({ erreur: error.message });
    }
  }
 //2.Obtenir tous les Produits 
  function getAllProduits(req, res) {
    try {
      const produits = Produit.findAll();
  
      res.status(200).json(produits);
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }
  //3.Obtenir un Produit A partir de son ID
  function getProduitById(req, res) {
    const { id } = req.params;
  
    try {
      const produit = Produit.findByPk(id);
  
      if (!produit) {
        return res.status(404).json({ erreur: "Produit introuvable" });
      }
  
      res.status(200).json(produit);
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }
  
//4.Mise à jour d'un produit**
  
  function updateProduit(req, res) {
    const { id } = req.params;
    const { nom, dateEntree, dateExpiration, quantite, prix } = req.body;
  
    try {
      const produit = Produit.findByPk(id);
  
      if (!produit) {
        return res.status(404).json({ erreur: "Produit introuvable" });
      }
  
      produit.nom = nom;
      produit.dateEntree = dateEntree;
      produit.dateExpiration = dateExpiration;
      produit.quantite = quantite;
      produit.prix = prix;
  
      produit.save();
  
      res.status(200).json(produit);
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }
  
//5.Suppression d'un produit
  function deleteProduit(req, res) {
    const { id } = req.params;
  
    try {
      const produit = Produit.findByPk(id);
  
      if (!produit) {
        return res.status(404).json({ erreur: "Produit introuvable" });
      }
  
      produit.destroy();
  
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erreur: error.message });
    }
  }
  