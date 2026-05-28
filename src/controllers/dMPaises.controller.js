const findAllUC = require('../usecases/findAllDMPaisess.usecase');
const findByIdUC = require('../usecases/findByIdDMPaises.usecase');
const createUC = require('../usecases/createDMPaises.usecase');
const updateUC = require('../usecases/updateDMPaises.usecase');
const deleteUC = require('../usecases/deleteDMPaises.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMPaisess(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMPaises(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMPaises(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMPaises(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMPaises(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
