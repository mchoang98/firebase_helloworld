const functions = require('firebase-functions');
const express = require('express');
const {getAllEntry} = require('./controller/getEntry');
const {addEntry} = require('./controller/addEntry');
const {updateEntry} = require('./controller/updateEntry');
const {deleteEntry} = require('./controller/deleteEntry');

const app = express();

app.get('/', getAllEntry);

app.get('/entries', getAllEntry);


app.post('/entries', addEntry);
exports.app = functions.https.onRequest(app);

app.patch('/entries/:entryId', updateEntry);
exports.app = functions.https.onRequest(app);

app.delete('/entries/:entryId', deleteEntry);
exports.app = functions.https.onRequest(app);


