import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
require('dotenv').config()

console.log(process.env.REACT_APP_AUTH_DOMAIN)
console.log(process.env.REACT_APP_DATABASE_URL)

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://m-city-f2082.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };


firebase.initializeApp(firebaseConfig);

const firebaseCFV = firebase.database();
// call it whatever

const firebaseMatches = firebaseCFV.ref('matches')

const firebasePromotions = firebaseCFV.ref('promotions')


export {
    firebase,
    firebaseMatches,
    firebasePromotions
}

// for testing
// firebaseCFV.ref('matches').once('value').then((snapshot) => {
//     // need to call the .val()
//     console.log(snapshot.val())
// })
