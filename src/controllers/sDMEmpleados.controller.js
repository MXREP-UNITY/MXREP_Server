const findAllUC = require('../usecases/findAllSDMEmpleadoss.usecase');
const findByIdUC = require('../usecases/findByIdSDMEmpleados.usecase');
const createUC = require('../usecases/createSDMEmpleados.usecase');
const updateUC = require('../usecases/updateSDMEmpleados.usecase');
const deleteUC = require('../usecases/deleteSDMEmpleados.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSDMEmpleadoss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSDMEmpleados(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSDMEmpleados(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSDMEmpleados(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSDMEmpleados(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
