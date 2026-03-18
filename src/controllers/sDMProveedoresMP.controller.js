const findAllUC = require('../usecases/findAllSDMProveedoresMPs.usecase');
const findByIdUC = require('../usecases/findByIdSDMProveedoresMP.usecase');
const createUC = require('../usecases/createSDMProveedoresMP.usecase');
const updateUC = require('../usecases/updateSDMProveedoresMP.usecase');
const deleteUC = require('../usecases/deleteSDMProveedoresMP.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMProveedoresMPs(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMProveedoresMP(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMProveedoresMP(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMProveedoresMP(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMProveedoresMP(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
