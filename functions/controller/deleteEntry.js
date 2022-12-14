const {db} = require('../config/firebase');
module.exports.deleteEntry = async (req, res) => {
    const {entryId} = req.params;
    try {
        const entry = db.collection('entries').doc(entryId);
        await entry.delete();
        return res.status(200).json({
            status: 'success',
            message: 'entry deleted successfully',
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
