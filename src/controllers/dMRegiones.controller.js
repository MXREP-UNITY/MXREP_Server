const findAllUC = require('../usecases/findAllDMRegioness.usecase');
const findByIdUC = require('../usecases/findByIdDMRegiones.usecase');
const createUC = require('../usecases/createDMRegiones.usecase');
const updateUC = require('../usecases/updateDMRegiones.usecase');
const deleteUC = require('../usecases/deleteDMRegiones.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMRegioness(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMRegiones(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMRegiones(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMRegiones(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMRegiones(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
