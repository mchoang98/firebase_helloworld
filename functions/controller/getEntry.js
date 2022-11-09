const {db} = require('../config/firebase');
module.exports.getAllEntry = async (req, res) => {
    try {
        const entries = await db.collection('entries').get();
        const entriesArray = [];
        entries.forEach((entry) => {
        entriesArray.push(entry.data());
        });
        return res.status(200).json({
        status: 'success',
        message: 'entries fetched successfully',
        data: entriesArray,
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
