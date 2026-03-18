const findAllUC = require('../usecases/findAllDMProductionLinePhases.usecase');
const findByIdUC = require('../usecases/findByIdDMProductionLinePhases.usecase');
const createUC = require('../usecases/createDMProductionLinePhases.usecase');
const updateUC = require('../usecases/updateDMProductionLinePhases.usecase');
const deleteUC = require('../usecases/deleteDMProductionLinePhases.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMProductionLinePhases(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMProductionLinePhases(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMProductionLinePhases(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMProductionLinePhases(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMProductionLinePhases(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
