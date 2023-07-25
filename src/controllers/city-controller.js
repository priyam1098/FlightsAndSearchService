const { CityService } = require("../services/index");
const cityService = new CityService();
const create = async (req, res) => {
  try {
    //console.log(req.body);
    const city = await cityService.createCity(req.body);

    return res.status(201).json({
      data: city,
      success: true,
      message: "Succesfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create city",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    console.log(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully deleted the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id, req.url);
    const url = req.url;
    const parts = url.split("/"); // Split the URL by "/"

    const airport = parts[2];
    if (airport == "airport" && req.params.id) {
      return res.status(200).json({
        data: city,
        success: true,
        message: "Succesfully fetched all the airport of city",
        err: {},
      });
    }
    return res.status(200).json({
      data: city,
      success: true,
      message: "Succesfully get the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.body, req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: `Succesfully updated the city`,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const city = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: city,
      success: true,
      message: `Succesfully get all the city`,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get All the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
