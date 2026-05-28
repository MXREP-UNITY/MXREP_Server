const findAllUC = require('../usecases/findAllSimulationsPurchasings.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsPurchasing.usecase');
const createUC = require('../usecases/createSimulationsPurchasing.usecase');
const updateUC = require('../usecases/updateSimulationsPurchasing.usecase');
const deleteUC = require('../usecases/deleteSimulationsPurchasing.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsPurchasings(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsPurchasing(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsPurchasing(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsPurchasing(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsPurchasing(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
