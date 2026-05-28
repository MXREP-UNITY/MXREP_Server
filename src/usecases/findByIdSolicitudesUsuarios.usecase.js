const SolicitudesUsuariosModel = require('../models/solicitudesUsuarios.model');
exports.findByIdSolicitudesUsuarios = async (id) => { const item = await SolicitudesUsuariosModel.findByIdSolicitudesUsuarios(id); return { item }; };
