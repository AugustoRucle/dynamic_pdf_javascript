const functions   = require('firebase-functions');
const admin       = require('firebase-admin')
const pdfTemplate = require('./template') 
const pdf         = require('html-pdf')
const pdfPath     = './certificate.pdf'
const os          = require('os')
const path        = require('path');

/* Bucker */
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

admin.initializeApp();

exports.saveDataPDF = functions.https.onRequest(async (req, res) => {
    const { assitant, workshop, date } = req.body
    try{
        const pdfResult  = await admin.firestore().collection(`pdf`).add({assitant:assitant, workshop:workshop, date:date});
        res.status(201).json({idPDF: pdfResult.id });
    }catch(ex){
        console.log(ex)
        res.status(409).json({ error: 'Sorry, i have a error, check you params' })
    } 
});

exports.createPDF = functions.firestore.document('/pdf/{documentId}')
    .onWrite( (change, context) => {
        const document = change.after.exists ? change.after.data() : null;
        if(document){
            const { assitant, workshop, date } = document;       
        }
        return Promise.resolve(1)
    });

//https://us-central1-dynamic-function.cloudfunctions.net/createPDFns.net/createPDF
