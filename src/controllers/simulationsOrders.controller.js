const findAllUC = require('../usecases/findAllSimulationsOrderss.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsOrders.usecase');
const createUC = require('../usecases/createSimulationsOrders.usecase');
const updateUC = require('../usecases/updateSimulationsOrders.usecase');
const deleteUC = require('../usecases/deleteSimulationsOrders.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsOrderss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsOrders(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsOrders(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsOrders(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsOrders(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
