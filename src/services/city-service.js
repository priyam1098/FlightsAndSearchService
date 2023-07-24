const { CityRepository } = require("../repository/index");
//const cityRepository = new CityRepository();

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  cityRepository = new CityRepository();
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
  async updateCity(cityName, cityId) {
    try {
      const city = await this.cityRepository.updateCity(cityName, cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }
  async getAllCities() {
    try {
      const cities = await this.cityRepository.getAllCities();
      return cities;
    } catch (error) {
      console.log("Something went wrong at repo layer");
      throw error;
    }
  }
}
module.exports = CityService;
