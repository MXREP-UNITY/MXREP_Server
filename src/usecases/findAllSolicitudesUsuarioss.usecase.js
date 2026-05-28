const SolicitudesUsuariosModel = require('../models/solicitudesUsuarios.model');
exports.findAllSolicitudesUsuarioss = async () => { const items = await SolicitudesUsuariosModel.findAllSolicitudesUsuarioss(); return { items }; };
