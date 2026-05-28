const findAllUC = require('../usecases/findAllRecoveriess.usecase');
const findByIdUC = require('../usecases/findByIdRecoveries.usecase');
const createUC = require('../usecases/createRecoveries.usecase');
const updateUC = require('../usecases/updateRecoveries.usecase');
const deleteUC = require('../usecases/deleteRecoveries.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllRecoveriess(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdRecoveries(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createRecoveries(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateRecoveries(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteRecoveries(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
