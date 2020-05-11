
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCimmToIygcPtrRH4OH7WLAiPO_wmlojNs",
    authDomain: "mercadito-2020.firebaseapp.com",
    databaseURL: "https://mercadito-2020.firebaseio.com",
    projectId: "mercadito-2020",
    storageBucket: "mercadito-2020.appspot.com",
    messagingSenderId: "504863942032",
    appId: "1:504863942032:web:37ee72c756d0429402ff15",
    measurementId: "G-NT2EFGHSL9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var app = document.getElementById('app');

  //var dbRef = firebase.database();

  //var messageRef = dbRef.ref('message');

  /*
  messageRef.once('value').then(function(snap){
    app.innerText = snap.val();
  })
  */
  
