const findAllUC = require('../usecases/findAllDMActivosFijosInventarios.usecase');
const findByIdUC = require('../usecases/findByIdDMActivosFijosInventario.usecase');
const createUC = require('../usecases/createDMActivosFijosInventario.usecase');
const updateUC = require('../usecases/updateDMActivosFijosInventario.usecase');
const deleteUC = require('../usecases/deleteDMActivosFijosInventario.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMActivosFijosInventarios(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMActivosFijosInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMActivosFijosInventario(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMActivosFijosInventario(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMActivosFijosInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
