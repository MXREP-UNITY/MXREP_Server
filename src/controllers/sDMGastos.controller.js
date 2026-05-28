const findAllUC = require('../usecases/findAllSDMGastoss.usecase');
const findByIdUC = require('../usecases/findByIdSDMGastos.usecase');
const createUC = require('../usecases/createSDMGastos.usecase');
const updateUC = require('../usecases/updateSDMGastos.usecase');
const deleteUC = require('../usecases/deleteSDMGastos.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMGastoss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMGastos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMGastos(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMGastos(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMGastos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
