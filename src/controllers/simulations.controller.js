const findAllUC = require('../usecases/findAllSimulationss.usecase');
const findByIdUC = require('../usecases/findByIdSimulations.usecase');
const createUC = require('../usecases/createSimulations.usecase');
const updateUC = require('../usecases/updateSimulations.usecase');
const deleteUC = require('../usecases/deleteSimulations.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulations(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulations(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulations(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulations(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
