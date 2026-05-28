const findAllUC = require('../usecases/findAllTDProductionLines.usecase');
const findByIdUC = require('../usecases/findByIdTDProductionLine.usecase');
const createUC = require('../usecases/createTDProductionLine.usecase');
const updateUC = require('../usecases/updateTDProductionLine.usecase');
const deleteUC = require('../usecases/deleteTDProductionLine.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllTDProductionLines(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdTDProductionLine(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createTDProductionLine(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateTDProductionLine(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteTDProductionLine(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
