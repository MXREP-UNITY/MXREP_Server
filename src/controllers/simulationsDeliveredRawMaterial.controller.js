const findAllUC = require('../usecases/findAllSimulationsDeliveredRawMaterials.usecase');
const findByIdUC = require('../usecases/findByIdSimulationsDeliveredRawMaterial.usecase');
const createUC = require('../usecases/createSimulationsDeliveredRawMaterial.usecase');
const updateUC = require('../usecases/updateSimulationsDeliveredRawMaterial.usecase');
const deleteUC = require('../usecases/deleteSimulationsDeliveredRawMaterial.usecase');

exports.getAll = async (req, res) => {
  try { const result = await findAllUC.findAllSimulationsDeliveredRawMaterials(); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.getById = async (req, res) => {
  try { const result = await findByIdUC.findByIdSimulationsDeliveredRawMaterial(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.create = async (req, res) => {
  try { const result = await createUC.createSimulationsDeliveredRawMaterial(req.body); res.status(201).json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.update = async (req, res) => {
  try { const result = await updateUC.updateSimulationsDeliveredRawMaterial(req.params.id, req.body); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.delete = async (req, res) => {
  try { const result = await deleteUC.deleteSimulationsDeliveredRawMaterial(req.params.id); res.json(result); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
