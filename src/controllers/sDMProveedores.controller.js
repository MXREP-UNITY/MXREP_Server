const findAllUC = require('../usecases/findAllSDMProveedoress.usecase');
const findByIdUC = require('../usecases/findByIdSDMProveedores.usecase');
const createUC = require('../usecases/createSDMProveedores.usecase');
const updateUC = require('../usecases/updateSDMProveedores.usecase');
const deleteUC = require('../usecases/deleteSDMProveedores.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMProveedoress(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMProveedores(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMProveedores(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMProveedores(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMProveedores(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
