const findAllUC = require('../usecases/findAllSimulationsInventorys.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsInventory.usecase');
const createUC = require('../usecases/createSimulationsInventory.usecase');
const updateUC = require('../usecases/updateSimulationsInventory.usecase');
const deleteUC = require('../usecases/deleteSimulationsInventory.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsInventorys(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsInventory(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsInventory(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsInventory(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsInventory(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
