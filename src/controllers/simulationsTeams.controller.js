const findAllUC = require('../usecases/findAllSimulationsTeamss.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsTeams.usecase');
const createUC = require('../usecases/createSimulationsTeams.usecase');
const updateUC = require('../usecases/updateSimulationsTeams.usecase');
const deleteUC = require('../usecases/deleteSimulationsTeams.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsTeamss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsTeams(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsTeams(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsTeams(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsTeams(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
