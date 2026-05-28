const findAllUC = require('../usecases/findAllDMProveedoresMPs.usecase');
const findByIdUC = require('../usecases/findByIdDMProveedoresMP.usecase');
const createUC = require('../usecases/createDMProveedoresMP.usecase');
const updateUC = require('../usecases/updateDMProveedoresMP.usecase');
const deleteUC = require('../usecases/deleteDMProveedoresMP.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMProveedoresMPs(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMProveedoresMP(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMProveedoresMP(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMProveedoresMP(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMProveedoresMP(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
