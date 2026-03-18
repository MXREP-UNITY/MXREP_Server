const SolicitudesUsuariosModel = require('../models/solicitudesUsuarios.model');
exports.deleteSolicitudesUsuarios = async (id) => { const item = await SolicitudesUsuariosModel.deleteSolicitudesUsuarios(id); return { item }; };
