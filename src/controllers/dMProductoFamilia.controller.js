const findAllUC = require('../usecases/findAllDMProductoFamilias.usecase');
const findByIdUC = require('../usecases/findByIdDMProductoFamilia.usecase');
const createUC = require('../usecases/createDMProductoFamilia.usecase');
const updateUC = require('../usecases/updateDMProductoFamilia.usecase');
const deleteUC = require('../usecases/deleteDMProductoFamilia.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMProductoFamilias(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMProductoFamilia(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMProductoFamilia(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMProductoFamilia(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMProductoFamilia(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
