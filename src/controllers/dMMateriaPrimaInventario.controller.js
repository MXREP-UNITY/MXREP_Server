const findAllUC = require('../usecases/findAllDMMateriaPrimaInventarios.usecase');
const findByIdUC = require('../usecases/findByIdDMMateriaPrimaInventario.usecase');
const createUC = require('../usecases/createDMMateriaPrimaInventario.usecase');
const updateUC = require('../usecases/updateDMMateriaPrimaInventario.usecase');
const deleteUC = require('../usecases/deleteDMMateriaPrimaInventario.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMMateriaPrimaInventarios(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMMateriaPrimaInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMMateriaPrimaInventario(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMMateriaPrimaInventario(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMMateriaPrimaInventario(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
