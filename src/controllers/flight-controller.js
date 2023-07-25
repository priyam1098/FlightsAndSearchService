const { FlightService } = require("../services/index");
const fligtService = new FlightService();

const create = async (req, res) => {
  try {
    //console.log(req.body);
    const flight = await fligtService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create flight",
      err: error,
    });
  }
};
module.exports = {
  create,
};
