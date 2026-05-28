const findAllUC = require('../usecases/findAllBitacoras.usecase');
const findByIdUC = require('../usecases/findByIdBitacora.usecase');
const createUC = require('../usecases/createBitacora.usecase');
const updateUC = require('../usecases/updateBitacora.usecase');
const deleteUC = require('../usecases/deleteBitacora.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllBitacoras(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdBitacora(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createBitacora(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateBitacora(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteBitacora(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
