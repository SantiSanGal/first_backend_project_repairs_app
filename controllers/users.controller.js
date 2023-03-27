const User = require('../models/users.model');

exports.findAllUsers = async (req, res) => {
  const { requesTime } = req;

  const users = await User.findAll({
    where: {
      status: true,
    },
  });

  res.status(200).json({
    status: 'succes',
    message: 'The query has been done successfully',
    requesTime,
    results: users.length,
    users,
  });
};

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const users = await User.create({
    name,
    email,
    password,
    role,
  });

  res.status(201).json({
    status: 'success',
    message: 'The client has been created',
    users,
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });

  const { name, email, password, role } = req.body;

  await user.update({
    name,
    email,
    password,
    role,
  });

  res.status(200).json({
    status: 'success',
    message: 'the client has been update',
    user,
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });

  await user.update({ status: false });

  res.status(200).json({
    status: 'success',
    message: 'The client has been delete successfully',
  });
};

exports.findOneUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'The Query has been done succesfully',
    user,
  });
};
