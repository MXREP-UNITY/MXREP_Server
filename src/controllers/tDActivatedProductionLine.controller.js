const findAllUC = require('../usecases/findAllTDActivatedProductionLines.usecase');
const findByIdUC = require('../usecases/findByIdTDActivatedProductionLine.usecase');
const createUC = require('../usecases/createTDActivatedProductionLine.usecase');
const updateUC = require('../usecases/updateTDActivatedProductionLine.usecase');
const deleteUC = require('../usecases/deleteTDActivatedProductionLine.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllTDActivatedProductionLines(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdTDActivatedProductionLine(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createTDActivatedProductionLine(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateTDActivatedProductionLine(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteTDActivatedProductionLine(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
