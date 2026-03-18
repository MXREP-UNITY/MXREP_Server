const findAllUC = require('../usecases/findAllTDProductoFamilias.usecase');
const findByIdUC = require('../usecases/findByIdTDProductoFamilia.usecase');
const createUC = require('../usecases/createTDProductoFamilia.usecase');
const updateUC = require('../usecases/updateTDProductoFamilia.usecase');
const deleteUC = require('../usecases/deleteTDProductoFamilia.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllTDProductoFamilias(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdTDProductoFamilia(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createTDProductoFamilia(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateTDProductoFamilia(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteTDProductoFamilia(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
