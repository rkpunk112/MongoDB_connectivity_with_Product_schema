const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const {
  getPeople,
  postPeople,
  updatePeople,
  deletePeople,
} = require("../controller/people");

router.get("/", getPeople);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleProducts = await Product.findById(id);
    res.status(200).json(singleProducts);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("", postPeople);

router.put("/:id", updatePeople);

router.delete("/:id", deletePeople);

module.exports = router;
