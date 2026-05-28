const findAllUC = require('../usecases/findAllSDMActivosFijosInventarios.usecase');
const findByIdUC = require('../usecases/findByIdSDMActivosFijosInventario.usecase');
const createUC = require('../usecases/createSDMActivosFijosInventario.usecase');
const updateUC = require('../usecases/updateSDMActivosFijosInventario.usecase');
const deleteUC = require('../usecases/deleteSDMActivosFijosInventario.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMActivosFijosInventarios(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMActivosFijosInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMActivosFijosInventario(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMActivosFijosInventario(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMActivosFijosInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
