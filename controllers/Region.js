// Import the Region model
import Region from '../models/Region.js';

// Controller to create a new region
export const createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    res.status(201).send(region);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to get the list of regions
export const getAllRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).send(regions);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to get a single region by ID
export const getRegionById = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (region) {
      res.status(200).send(region);
    } else {
      res.status(404).send({ message: 'Region not found.' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to update a region
export const updateRegion = async (req, res) => {
  try {
    const updated = await Region.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedRegion = await Region.findByPk(req.params.id);
      res.status(200).send(updatedRegion);
    } else {
      res.status(404).send({ message: 'Region not found.' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to delete a region
export const deleteRegion = async (req, res) => {
  try {
    const deleted = await Region.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(200).send({ message: 'Region deleted.' });
    } else {
      res.status(404).send({ message: 'Region not found.' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};