const Repair = require('../models/repairs.model');

exports.findAllRepairs = async (req, res) => {
  const { requesTime } = req;

  const products = await Product.findAll({
    where: {
      status: true,
    },
  });

  res.status(200).json({
    status: 'succes',
    message: 'The query has been done successfully',
    requesTime,
    results: products.length, 
    products,
  });
};

exports.createRepair = async (req, res) => {
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  const product = await Product.create({
    name: name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  console.log('funcionó el post xd');
  console.log(req.body);
  res.status(201).json({
    status: 'success',
    message: 'The product has been created',
    product,
  });
};

exports.updateRepair = async (req, res) => {
  const { product } = req;
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  await product.update(
    {
      name,
      image,
      ingredients,
      quantity,
      price,
      isNew,
      description,
    }
  );

  res.status(200).json({
    status: 'success',
    message: 'the product has been update',
  });
};

exports.deleteRepair = async (req, res) => {
  const { product } = req;
  await product.update({ status: false });

  res.status(200).json({
    status: 'success',
    message: 'The product has been delete successfully',
  });
};

exports.findOneRepair = async (req, res) => {
  const { product } = req;

  res.status(200).json({
    status: 'success',
    message: 'The Query has been done succesfully',
    product,
  });
};
