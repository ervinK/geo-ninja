import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyDlPbuvnhW3vrbTU15K5Ud3Ux3T_I7Dh3E",
  authDomain: "geo-ninjas-48fa1.firebaseapp.com",
  databaseURL: "https://geo-ninjas-48fa1.firebaseio.com",
  projectId: "geo-ninjas-48fa1",
  storageBucket: "geo-ninjas-48fa1.appspot.com",
  messagingSenderId: "222371663748"
};

const firebaseApp = firebase.initializeApp(config);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
