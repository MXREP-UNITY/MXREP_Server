const findAllUC = require('../usecases/findAllTDSimulationFinancialLogs.usecase');
const findByIdUC = require('../usecases/findByIdTDSimulationFinancialLog.usecase');
const createUC = require('../usecases/createTDSimulationFinancialLog.usecase');
const updateUC = require('../usecases/updateTDSimulationFinancialLog.usecase');
const deleteUC = require('../usecases/deleteTDSimulationFinancialLog.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllTDSimulationFinancialLogs(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdTDSimulationFinancialLog(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createTDSimulationFinancialLog(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateTDSimulationFinancialLog(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteTDSimulationFinancialLog(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
