const findAllUC = require('../usecases/findAllSDMSalaryTabulators.usecase');
const findByIdUC = require('../usecases/findByIdSDMSalaryTabulator.usecase');
const createUC = require('../usecases/createSDMSalaryTabulator.usecase');
const updateUC = require('../usecases/updateSDMSalaryTabulator.usecase');
const deleteUC = require('../usecases/deleteSDMSalaryTabulator.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMSalaryTabulators(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMSalaryTabulator(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMSalaryTabulator(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMSalaryTabulator(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMSalaryTabulator(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
