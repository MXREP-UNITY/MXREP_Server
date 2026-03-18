const findAllUC = require('../usecases/findAllDMTransportes.usecase');
const findByIdUC = require('../usecases/findByIdDMTransporte.usecase');
const createUC = require('../usecases/createDMTransporte.usecase');
const updateUC = require('../usecases/updateDMTransporte.usecase');
const deleteUC = require('../usecases/deleteDMTransporte.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMTransportes(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMTransporte(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMTransporte(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMTransporte(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMTransporte(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
