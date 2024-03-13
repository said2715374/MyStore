// Import the Magasin model
import Magasin from '../models/Magasin.js';

// Controller to create a new store
export const createStore = async (req, res) => {
  try {
    const store = await Magasin.create(req.body);
    res.status(201).json(store);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get all stores
export const getAllStores = async (req, res) => {
  try {
    const stores = await Magasin.findAll();
    res.status(200).json(stores);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get a single store by id
export const getStoreById = async (req, res) => {
  try {
    const store = await Magasin.findByPk(req.params.id);
    if (store) {
      res.status(200).json(store);
    } else {
      res.status(404).json({ message: 'Store not found.' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to update a store
export const updateStore = async (req, res) => {
  try {
    const [updated] = await Magasin.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedStore = await Magasin.findByPk(req.params.id);
      res.status(200).json(updatedStore);
    } else {
      res.status(404).json({ message: 'Store not found.' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to delete a store
export const deleteStore = async (req, res) => {
  try {
    const deleted = await Magasin.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: 'Store successfully deleted.' });
    } else {
      res.status(404).json({ message: 'Store not found.' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};