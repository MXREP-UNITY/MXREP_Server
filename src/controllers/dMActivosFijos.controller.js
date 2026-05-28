const findAllUC = require('../usecases/findAllDMActivosFijoss.usecase');
const findByIdUC = require('../usecases/findByIdDMActivosFijos.usecase');
const createUC = require('../usecases/createDMActivosFijos.usecase');
const updateUC = require('../usecases/updateDMActivosFijos.usecase');
const deleteUC = require('../usecases/deleteDMActivosFijos.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMActivosFijoss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMActivosFijos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMActivosFijos(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMActivosFijos(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMActivosFijos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
