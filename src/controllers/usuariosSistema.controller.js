const findAllUC = require('../usecases/findAllUsuariosSistemas.usecase');
const findByIdUC = require('../usecases/findByIdUsuariosSistema.usecase');
const createUC = require('../usecases/createUsuariosSistema.usecase');
const updateUC = require('../usecases/updateUsuariosSistema.usecase');
const deleteUC = require('../usecases/deleteUsuariosSistema.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllUsuariosSistemas(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdUsuariosSistema(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createUsuariosSistema(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateUsuariosSistema(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteUsuariosSistema(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
