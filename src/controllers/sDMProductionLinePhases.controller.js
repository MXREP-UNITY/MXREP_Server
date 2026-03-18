const findAllUC = require('../usecases/findAllSDMProductionLinePhases.usecase');
const findByIdUC = require('../usecases/findByIdSDMProductionLinePhases.usecase');
const createUC = require('../usecases/createSDMProductionLinePhases.usecase');
const updateUC = require('../usecases/updateSDMProductionLinePhases.usecase');
const deleteUC = require('../usecases/deleteSDMProductionLinePhases.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMProductionLinePhases(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMProductionLinePhases(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMProductionLinePhases(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMProductionLinePhases(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMProductionLinePhases(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
