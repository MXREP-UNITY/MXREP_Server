const findAllUC = require('../usecases/findAllGruposs.usecase');
const findByIdUC = require('../usecases/findByIdGrupos.usecase');
const createUC = require('../usecases/createGrupos.usecase');
const updateUC = require('../usecases/updateGrupos.usecase');
const deleteUC = require('../usecases/deleteGrupos.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllGruposs(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdGrupos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createGrupos(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateGrupos(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteGrupos(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
