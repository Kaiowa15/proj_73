import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
    apiKey: "AIzaSyDO3TqUGEGfW0vCHfc3XchDMpCpaHRcZ5M",
    authDomain: "proj-71-f1f71.firebaseapp.com",
    databaseURL: "https://proj-71-f1f71-default-rtdb.firebaseio.com",
    projectId: "proj-71-f1f71",
    storageBucket: "proj-71-f1f71.appspot.com",
    messagingSenderId: "450752021003",
    appId: "1:450752021003:web:6c638c1de55764ad1abd0e"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
