const findAllUC = require('../usecases/findAllSDMActivosFijoss.usecase');
const findByIdUC = require('../usecases/findByIdSDMActivosFijos.usecase');
const createUC = require('../usecases/createSDMActivosFijos.usecase');
const updateUC = require('../usecases/updateSDMActivosFijos.usecase');
const deleteUC = require('../usecases/deleteSDMActivosFijos.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMActivosFijoss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMActivosFijos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMActivosFijos(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMActivosFijos(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMActivosFijos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
