const Product = require("../models/product.model");
const getPeople = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const postPeople = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
}

const updatePeople = async (req, res) => {
  try {
    const { id } = req.params;
    // const{name}=req.body;
    // const newProduct=await Product.findById(id);

    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ data: `No person is present with the id : ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const deletePeople = async (req, res) => {
  try {
    const { id } = req.params;
    // const{name}=req.body;
    // const newProduct=await Product.findById(id);

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ data: `No person is present with the id : ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getPeople,
  postPeople,
  updatePeople,
  deletePeople,
};
