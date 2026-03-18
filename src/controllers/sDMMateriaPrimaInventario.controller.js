const findAllUC = require('../usecases/findAllSDMMateriaPrimaInventarios.usecase');
const findByIdUC = require('../usecases/findByIdSDMMateriaPrimaInventario.usecase');
const createUC = require('../usecases/createSDMMateriaPrimaInventario.usecase');
const updateUC = require('../usecases/updateSDMMateriaPrimaInventario.usecase');
const deleteUC = require('../usecases/deleteSDMMateriaPrimaInventario.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMMateriaPrimaInventarios(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMMateriaPrimaInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMMateriaPrimaInventario(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMMateriaPrimaInventario(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMMateriaPrimaInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
