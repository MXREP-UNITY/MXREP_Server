const findAllUC = require('../usecases/findAllDMSalaryTabulators.usecase');
const findByIdUC = require('../usecases/findByIdDMSalaryTabulator.usecase');
const createUC = require('../usecases/createDMSalaryTabulator.usecase');
const updateUC = require('../usecases/updateDMSalaryTabulator.usecase');
const deleteUC = require('../usecases/deleteDMSalaryTabulator.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMSalaryTabulators(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMSalaryTabulator(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMSalaryTabulator(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMSalaryTabulator(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMSalaryTabulator(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
