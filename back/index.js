//const express = require('express');
import express from 'express';
//import firebase from './firebase.js';
//const {firebase} = require('./firebase')
import db from "./firebase.js";
import bodyParser from 'body-parser';
// import firebase from 'firebase';

const app = express();
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/'));

// Récupération des données des utilisateurs à partir de Firebase
app.get('api/users', (req, res) => {

  db.ref('joueur').on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    
  });

});

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/index.html');
});
// Démarrage du serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});