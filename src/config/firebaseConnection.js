import firebase from 'firebase'

let firebaseConfig = {
      apiKey: "AIzaSyDCiLPfu3_ILW3nyn-DMbN6o5lWVXAyMOE",
      authDomain: "rn-zero-profissional.firebaseapp.com",
      databaseURL: "https://rn-zero-profissional.firebaseio.com",
      projectId: "rn-zero-profissional",
      storageBucket: "",
      messagingSenderId: "695663314005",
      appId: "1:695663314005:web:b1a810da44cdd8fc"
    };

    firebase.initializeApp(firebaseConfig);
    export default firebase;