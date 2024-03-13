import express from 'express';
// Assuming your controllers are defined in a file named `storeController.js`
import { createStore, getAllStores, getStoreById, updateStore, deleteStore } from '../controllers/storeController.js';

const router = express.Router();

// Route to create a new store
router.post('/stores', createStore);

// Route to get all stores
router.get('/stores', getAllStores);

// Route to get a single store by id
router.get('/stores/:id', getStoreById);

// Route to update a store
router.put('/stores/:id', updateStore);

// Route to delete a store
router.delete('/stores/:id', deleteStore);

export default router;