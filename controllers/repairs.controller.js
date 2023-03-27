const Repair = require('../models/repairs.model');

exports.findAllRepairs = async (req, res) => {
  const { requesTime } = req;

  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  res.status(200).json({
    status: 'succes',
    message: 'The query has been done successfully',
    requesTime,
    results: repairs.length, 
    repairs,
  });
};

exports.createRepair = async (req, res) => {
  const { date, userId } = req.body;

  const repairs = await Repair.create({
    date,
    userId
  });

  res.status(201).json({
    status: 'success',
    message: 'the repair has been scheduled',
    repairs,
  });
};

exports.updateRepair = async (req, res) => {
  const { id } = req.params;

  if (!repair) {
    return res.status(404).json({
      status: 'Error',
      message: `Repair with id: ${id} not found`,
    });
  }

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  await repair.update({status: 'completed'});

  res.status(200).json({
    status: 'success',
    message: 'the repair has been update',
  });
};

exports.deleteRepair = async (req, res) => {
  const { id } = req.params;

  if (!repair) {
    return res.status(404).json({
      status: 'Error',
      message: `Repair with id: ${id} not found`,
    });
  }

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending'
    },
  });

  await repair.update({status: 'cancelled'});

  res.status(200).json({
    status: 'success',
    message: 'The product has been delete successfully',
  });
};

exports.findOneRepair = async (req, res) => {
  
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending'
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'Error',
      message: `Repair with id: ${id} not found`,
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'The Query has been done succesfully',
    repair,
  });
};
