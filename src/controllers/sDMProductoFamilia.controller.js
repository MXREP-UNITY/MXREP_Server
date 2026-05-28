const findAllUC = require('../usecases/findAllSDMProductoFamilias.usecase');
const findByIdUC = require('../usecases/findByIdSDMProductoFamilia.usecase');
const createUC = require('../usecases/createSDMProductoFamilia.usecase');
const updateUC = require('../usecases/updateSDMProductoFamilia.usecase');
const deleteUC = require('../usecases/deleteSDMProductoFamilia.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMProductoFamilias(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMProductoFamilia(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMProductoFamilia(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMProductoFamilia(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMProductoFamilia(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
