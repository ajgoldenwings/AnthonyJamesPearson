import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBHujWjX2dljQzuXuTA0LcqHd1neM-JA8k",
  authDomain: "my-events-33491.firebaseapp.com",
  databaseURL: "https://my-events-33491.firebaseio.com",
  storageBucket: "my-events-33491.appspot.com",
  messagingSenderId: "116436781293"
};
var fire = firebase.initializeApp(config);
export default fire;