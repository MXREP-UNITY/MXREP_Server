const findAllUC = require('../usecases/findAllDMProveedoress.usecase');
const findByIdUC = require('../usecases/findByIdDMProveedores.usecase');
const createUC = require('../usecases/createDMProveedores.usecase');
const updateUC = require('../usecases/updateDMProveedores.usecase');
const deleteUC = require('../usecases/deleteDMProveedores.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMProveedoress(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMProveedores(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMProveedores(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMProveedores(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMProveedores(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
