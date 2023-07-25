const { Flight } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong at repo of flight layer");
      throw error;
    }
  }
  async deleteFlight() {}
  async updateFlight() {}
  async getFlight() {}
}

module.exports = FlightRepository;
