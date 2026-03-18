const findAllUC = require('../usecases/findAllTDMEmployeess.usecase');
const findByIdUC = require('../usecases/findByIdTDMEmployees.usecase');
const createUC = require('../usecases/createTDMEmployees.usecase');
const updateUC = require('../usecases/updateTDMEmployees.usecase');
const deleteUC = require('../usecases/deleteTDMEmployees.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllTDMEmployeess(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdTDMEmployees(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createTDMEmployees(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateTDMEmployees(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteTDMEmployees(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
