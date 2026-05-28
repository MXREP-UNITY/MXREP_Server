const findAllUC = require('../usecases/findAllDMProductionLineTemplatess.usecase');
const findByIdUC = require('../usecases/findByIdDMProductionLineTemplates.usecase');
const createUC = require('../usecases/createDMProductionLineTemplates.usecase');
const updateUC = require('../usecases/updateDMProductionLineTemplates.usecase');
const deleteUC = require('../usecases/deleteDMProductionLineTemplates.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMProductionLineTemplatess(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMProductionLineTemplates(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMProductionLineTemplates(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMProductionLineTemplates(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMProductionLineTemplates(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
