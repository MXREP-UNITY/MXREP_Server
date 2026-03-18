const findAllUC = require('../usecases/findAllPermisoss.usecase');
const findByIdUC = require('../usecases/findByIdPermisos.usecase');
const createUC = require('../usecases/createPermisos.usecase');
const updateUC = require('../usecases/updatePermisos.usecase');
const deleteUC = require('../usecases/deletePermisos.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllPermisoss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdPermisos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createPermisos(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updatePermisos(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deletePermisos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
