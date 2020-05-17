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

var db = firebase.firestore();

firebase.analytics();

var app = document.getElementById('app');


//Observador
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    document.getElementById('login').innerHTML =
      `<div>
    <p>Logueado como `+ user.email + `<p>
    <button type="button" class="btn btn-danger" onclick="cerrar()">Cerrar sesion</button>
    </div>
    `;
  } else {
    document.getElementById('login').innerHTML = "";
  }
});


//Funcion de registro
function registrar() {
  if(validarTodosCampos()){

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var pass_retry = document.getElementById("pass_retry").value;
  var direccion = document.getElementById('direccion').value;
  var telefono = document.getElementById('telefono').value;
  //Validaciones propias de Firebase
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(function(){
       alert("Usuario registrado");

        db.collection("clientes").doc().set({
          nombre: nombre,
          apellido: apellido,
          email: email,
          direccion: direccion,
          telefono: telefono
        });
       // alert("Datos registrado");

      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (error.code == "auth/invalid-email") {
          alert("La dirección de correo electrónico no tiene el formato correcto.");
        }
        else if (error.code == "auth/weak-password") {
          alert("La contraseña debe tener 6 caracteres o mas.");
        }
        else if (error.code == "auth/email-already-in-use") {
          alert("La correo ya esta en uso.");
        }
        else {
          alert(errorCode);
        }
      }); 
  }
}

//Funcion cerrar sesion
function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      console.log('Salir');
      mostrarCamposRegistro();
    })
    .catch(function (error) {
      ocultarCamposRegistro();
      alert(error.message);
    })
}

//Funcion iniciar sesion
function iniciarSesion() {
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function () {
      ocultarCamposRegistro();
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      mostrarCamposRegistro();
      if (error.code == "auth/invalid-email") {
        alert("La dirección de correo electrónico no tiene el formato correcto.");
      }
      else if (error.code == "auth/wrong-password") {
        alert("Contraseña incorrecta.");
      }
      else {
        alert(errorMessage);
      }
    });
}

function mostrarCamposRegistro() {
  $("#campos-login").show();
  $("#login").hide();
}

function ocultarCamposRegistro() {
  $("#campos-login").hide();
  $("#login").show();
}