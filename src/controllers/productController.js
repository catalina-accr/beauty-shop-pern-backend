const products = [
  {
    id: 1,
    name: "Lipstick Matte",
    price: 29.99,
  },
  {
    id: 2,
    name: "Face Serum",
    price: 49.99,
  },
];

const getProducts = (req, res) => {
  res.status(200).json(products);
};

module.exports = {
  getProducts,
};