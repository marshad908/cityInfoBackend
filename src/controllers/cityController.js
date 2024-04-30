const City = require('../models/city');

exports.createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json(city);
  } catch (error) {
    console.error('Error creating city:', error);
    res.status(500).json({ error: 'Could not create city' });
  }
};

exports.listCities = async (req, res) => {
  try {
    const cities = await City.find({});
    res.json(cities);
  } catch (error) {
    console.error('Error listing cities:', error);
    res.status(500).json({ error: 'Could not list cities' });
  }
};

exports.getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      return res.status(404).json({ error: 'City not found' });
    }
    res.json(city);
  } catch (error) {
    console.error('Error getting city by ID:', error);
    res.status(500).json({ error: 'Could not get city' });
  }
};

