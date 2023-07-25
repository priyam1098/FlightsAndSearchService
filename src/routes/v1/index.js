const express = require("express");
const router = express.Router();
const CityController = require("../../controllers/city-controller");

router.get("/city/:id", CityController.get);
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.get("/city/airport/:id", CityController.get);

module.exports = router;
