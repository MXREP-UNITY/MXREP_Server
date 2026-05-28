const findAllUC = require('../usecases/findAllGruposUsuarioss.usecase');
const findByIdUC = require('../usecases/findByIdGruposUsuarios.usecase');
const createUC = require('../usecases/createGruposUsuarios.usecase');
const updateUC = require('../usecases/updateGruposUsuarios.usecase');
const deleteUC = require('../usecases/deleteGruposUsuarios.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllGruposUsuarioss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdGruposUsuarios(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createGruposUsuarios(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateGruposUsuarios(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteGruposUsuarios(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
