const findAllUC = require('../usecases/findAllDMEmpleadoss.usecase');
const findByIdUC = require('../usecases/findByIdDMEmpleados.usecase');
const createUC = require('../usecases/createDMEmpleados.usecase');
const updateUC = require('../usecases/updateDMEmpleados.usecase');
const deleteUC = require('../usecases/deleteDMEmpleados.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllDMEmpleadoss(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdDMEmpleados(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createDMEmpleados(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateDMEmpleados(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteDMEmpleados(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
