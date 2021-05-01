import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDsaNopeIr2WcCciKVCIg_pYPOe5pexTEQ",
    authDomain: "login-cred-3b710.firebaseapp.com",
    projectId: "login-cred-3b710",
    storageBucket: "login-cred-3b710.appspot.com",
    messagingSenderId: "1038813766540",
    appId: "1:1038813766540:web:753782e619de196d876ca9",
    measurementId: "G-WM9CV7C3SS",
};

const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
