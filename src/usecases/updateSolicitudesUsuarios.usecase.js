const SolicitudesUsuariosModel = require('../models/solicitudesUsuarios.model');
exports.updateSolicitudesUsuarios = async (id, data) => { const item = await SolicitudesUsuariosModel.updateSolicitudesUsuarios(id, data); return { item }; };
