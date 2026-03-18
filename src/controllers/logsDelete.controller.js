const findAllUC = require('../usecases/findAllLogsDeletes.usecase');
const findByIdUC = require('../usecases/findByIdLogsDelete.usecase');
const createUC = require('../usecases/createLogsDelete.usecase');
const updateUC = require('../usecases/updateLogsDelete.usecase');
const deleteUC = require('../usecases/deleteLogsDelete.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllLogsDeletes(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdLogsDelete(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createLogsDelete(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateLogsDelete(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteLogsDelete(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
