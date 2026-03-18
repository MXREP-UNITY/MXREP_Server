const findAllUC = require('../usecases/findAllSDMProductionLineTemplatess.usecase');
const findByIdUC = require('../usecases/findByIdSDMProductionLineTemplates.usecase');
const createUC = require('../usecases/createSDMProductionLineTemplates.usecase');
const updateUC = require('../usecases/updateSDMProductionLineTemplates.usecase');
const deleteUC = require('../usecases/deleteSDMProductionLineTemplates.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMProductionLineTemplatess(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMProductionLineTemplates(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMProductionLineTemplates(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMProductionLineTemplates(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMProductionLineTemplates(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
