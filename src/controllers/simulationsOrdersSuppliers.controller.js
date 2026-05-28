const findAllUC = require('../usecases/findAllSimulationsOrdersSupplierss.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsOrdersSuppliers.usecase');
const createUC = require('../usecases/createSimulationsOrdersSuppliers.usecase');
const updateUC = require('../usecases/updateSimulationsOrdersSuppliers.usecase');
const deleteUC = require('../usecases/deleteSimulationsOrdersSuppliers.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsOrdersSupplierss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsOrdersSuppliers(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsOrdersSuppliers(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsOrdersSuppliers(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsOrdersSuppliers(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
