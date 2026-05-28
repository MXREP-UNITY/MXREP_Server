const findAllUC = require('../usecases/findAllDMMateriaPrimas.usecase');
const findByIdUC = require('../usecases/findByIdDMMateriaPrima.usecase');
const createUC = require('../usecases/createDMMateriaPrima.usecase');
const updateUC = require('../usecases/updateDMMateriaPrima.usecase');
const deleteUC = require('../usecases/deleteDMMateriaPrima.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMMateriaPrimas(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMMateriaPrima(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMMateriaPrima(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMMateriaPrima(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMMateriaPrima(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
