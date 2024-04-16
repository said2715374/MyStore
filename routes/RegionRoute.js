import express from 'express';
// Assuming your controller functions are in a file named `regionController.js`
import { createRegion, getAllRegions, getRegionById, updateRegion, deleteRegion } from '../controllers/Region.js';

const RegionRoute = express.Router();

// Route to create a new region
RegionRoute.post('/regions', createRegion);

// Route to get all regions
RegionRoute.get('/regions', getAllRegions);

// Route to get a single region by ID
RegionRoute.get('/regions/:id', getRegionById);

// Route to update a region
RegionRoute.put('/regions/:id', updateRegion);

// Route to delete a region
RegionRoute.delete('/regions/:id', deleteRegion);

export default RegionRoute;