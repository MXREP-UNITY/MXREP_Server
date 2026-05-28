const exceljs = require("exceljs")

exports.generateExcel = function() {
    try {
        const workbook = new exceljs.Workbook();
    } catch (e) {
        console.log(e);
    }
}