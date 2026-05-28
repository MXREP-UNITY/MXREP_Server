const findAllUC = require('../usecases/findAllDMClientess.usecase');
const findByIdUC = require('../usecases/findByIdDMClientes.usecase');
const createUC = require('../usecases/createDMClientes.usecase');
const updateUC = require('../usecases/updateDMClientes.usecase');
const deleteUC = require('../usecases/deleteDMClientes.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMClientess(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMClientes(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMClientes(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMClientes(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMClientes(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
