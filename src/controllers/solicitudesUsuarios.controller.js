const findAllUC = require('../usecases/findAllSolicitudesUsuarioss.usecase');
const findByIdUC = require('../usecases/findByIdSolicitudesUsuarios.usecase');
const createUC = require('../usecases/createSolicitudesUsuarios.usecase');
const updateUC = require('../usecases/updateSolicitudesUsuarios.usecase');
const deleteUC = require('../usecases/deleteSolicitudesUsuarios.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSolicitudesUsuarioss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSolicitudesUsuarios(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSolicitudesUsuarios(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSolicitudesUsuarios(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSolicitudesUsuarios(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
