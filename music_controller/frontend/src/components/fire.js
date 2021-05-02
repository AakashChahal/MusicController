import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAknEtB6-eNTF7OFExJRXcxvCjkAksp4hc",
    authDomain: "music-app-login.firebaseapp.com",
    projectId: "music-app-login",
    storageBucket: "music-app-login.appspot.com",
    messagingSenderId: "184430199162",
    appId: "1:184430199162:web:5c374d87d9cd3b6da696c3",
    measurementId: "G-TS6VTKWDYR",
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
