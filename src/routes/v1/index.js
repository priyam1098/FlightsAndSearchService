const express = require("express");
const router = express.Router();
const { CityController, FlightController } = require("../../controllers/index");

router.get("/city/:id", CityController.get);
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.get("/city/airport/:id", CityController.get);

router.post("/flights", FlightController.create);

module.exports = router;
