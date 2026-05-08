
exports.getExcel = async (req, res) => {
    try {
        console.log("Helloo");
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}