import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDrzB02b3M24QZTQPPcXViQy9O1BrBBAPk",
    authDomain: "georgettewebsite.firebaseapp.com",
    databaseURL: "https://georgettewebsite.firebaseio.com",
    projectId: "georgettewebsite",
    storageBucket: "georgettewebsite.appspot.com",
    messagingSenderId: "96633810250"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();