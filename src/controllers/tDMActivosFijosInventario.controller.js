const findAllUC = require('../usecases/findAllTDMActivosFijosInventarios.usecase');
const findByIdUC = require('../usecases/findByIdTDMActivosFijosInventario.usecase');
const createUC = require('../usecases/createTDMActivosFijosInventario.usecase');
const updateUC = require('../usecases/updateTDMActivosFijosInventario.usecase');
const deleteUC = require('../usecases/deleteTDMActivosFijosInventario.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllTDMActivosFijosInventarios(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdTDMActivosFijosInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createTDMActivosFijosInventario(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateTDMActivosFijosInventario(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteTDMActivosFijosInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
