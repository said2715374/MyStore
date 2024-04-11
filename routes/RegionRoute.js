import express from 'express';
// Assuming your controller functions are in a file named `regionController.js`
import { createRegion, getAllRegions, getRegionById, updateRegion, deleteRegion } from '../controllers/Region.js';

const router = express.Router();

// Route to create a new region
router.post('/regions', createRegion);

// Route to get all regions
router.get('/regions', getAllRegions);

// Route to get a single region by ID
router.get('/regions/:id', getRegionById);

// Route to update a region
router.put('/regions/:id', updateRegion);

// Route to delete a region
router.delete('/regions/:id', deleteRegion);

export default router;