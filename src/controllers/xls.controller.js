const generateExcel = require("../usecases/generateXls.usecase")

exports.getExcel = async (req, res) => {
    try {
        const xlsBuffer = await generateExcel();
        res.set("Content-Disposition", "attachment; filename=template_financiero.xls");
        res.type("application/nnd.ms-excel");
        res.send(xlsBuffer);
    } catch (e) {
        res.status(500).json({error: e.message});
    }
}