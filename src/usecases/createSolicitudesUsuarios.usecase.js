const SolicitudesUsuariosModel = require('../models/solicitudesUsuarios.model');
exports.createSolicitudesUsuarios = async (data) => { const item = await SolicitudesUsuariosModel.createSolicitudesUsuarios(data); return { item }; };
