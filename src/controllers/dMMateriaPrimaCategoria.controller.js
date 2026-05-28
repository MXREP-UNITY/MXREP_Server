const findAllUC = require('../usecases/findAllDMMateriaPrimaCategorias.usecase');
const findByIdUC = require('../usecases/findByIdDMMateriaPrimaCategoria.usecase');
const createUC = require('../usecases/createDMMateriaPrimaCategoria.usecase');
const updateUC = require('../usecases/updateDMMateriaPrimaCategoria.usecase');
const deleteUC = require('../usecases/deleteDMMateriaPrimaCategoria.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMMateriaPrimaCategorias(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMMateriaPrimaCategoria(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMMateriaPrimaCategoria(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMMateriaPrimaCategoria(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMMateriaPrimaCategoria(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
