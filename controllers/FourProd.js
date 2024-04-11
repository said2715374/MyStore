

async function getFournisseursByProduit(req, res) {
  const { id } = req.params;

  try {
    const produit = await Produit.findByPk(id, {
      include: [{
        model: Fournisseur,
        through: { attributes: [] }, // Exclure les attributs de la table intermédiaire
      }],
    });

    if (!produit) {
      return res.status(404).json({ erreur: "Produit introuvable" });
    }

    res.status(200).json(produit.fournisseurs);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
}

async function getProduitsByFournisseur(req, res) {
  const { id } = req.params;

  try {
    const fournisseur = await Fournisseur.findByPk(id, {
      include: [{
        model: Produit,
        through: { attributes: [] }, // Exclure les attributs de la table intermédiaire
      }],
    });

    if (!fournisseur) {
      return res.status(404).json({ erreur: "Fournisseur introuvable" });
    }

    res.status(200).json(fournisseur.produits);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
}

async function addFournisseurToProduit(req, res) {
  const { produitId, fournisseurId } = req.body;

  try {
    const produit = await Produit.findByPk(produitId);
    const fournisseur = await Fournisseur.findByPk(fournisseurId);

    if (!produit || !fournisseur) {
      return res.status(404).json({ erreur: "Produit ou fournisseur introuvable" });
    }

    await produit.addFournisseur(fournisseur);

    res.status(201).json({ message: "Fournisseur ajouté au produit" });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
}

async function removeFournisseurFromProduit(req, res) {
  const { produitId, fournisseurId } = req.body;

  try {
    const produit = await Produit.findByPk(produitId);
    const fournisseur = await Fournisseur.findByPk(fournisseurId);

    if (!produit || !fournisseur) {
      return res.status(404).json({ erreur: "Produit ou fournisseur introuvable" });
    }

    await produit.removeFournisseur(fournisseur);

    res.status(200).json({ message: "Fournisseur supprimé du produit" });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
}

async function getProduitsByFournisseurWithDetails(req, res) {
  const { id } = req.params;

  try {
    const fournisseur = await Fournisseur.findByPk(id, {
      include: [{
        model: Produit,
        through: {
          attributes: ['prix', 'dateLivraison'], // Inclure des champs supplémentaires de la table intermédiaire
        },
      }],
    });

    if (!fournisseur) {
      return res.status(404).json({ erreur: "Fournisseur introuvable" });
    }

    res.status(200).json(fournisseur.produits);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
}

export {
getFournisseursByProduit,
getProduitsByFournisseur,
addFournisseurToProduit,
removeFournisseurFromProduit,
getProduitsByFournisseurWithDetails
};
