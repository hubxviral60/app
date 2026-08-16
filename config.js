// js/config.js - শুধু Firebase Config, আর কিছু না

const firebaseConfig = {
  apiKey: "AIzaSyBQu8cmBIEsSBIsvSsvXH3jGYjopWnf5pM",
  authDomain: "hubx-viral.firebaseapp.com",
  databaseURL: "https://hubx-viral-default-rtdb.firebaseio.com",
  projectId: "hubx-viral",
  storageBucket: "hubx-viral.firebasestorage.app",
  messagingSenderId: "694752071521",
  appId: "1:694752071521:web:79603b500368f90070ff20",
  measurementId: "G-TX4ZP9P6NB"
};

// Firebase Start - এই লাইনটা না থাকলেই Error আসে
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
