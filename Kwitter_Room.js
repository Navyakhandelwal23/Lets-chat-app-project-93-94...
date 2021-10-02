
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
  apiKey: "AIzaSyBfEHK1Y_oHKtGsWWMqlkNQKpGt_wF6Lf4",
  authDomain: "lets-chat-web-app-7bd1f.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-7bd1f-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-7bd1f",
  storageBucket: "lets-chat-web-app-7bd1f.appspot.com",
  messagingSenderId: "489738248139",
  appId: "1:489738248139:web:2745b25e66630cd789a04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
    
        //End code
        });});}
  getData();

  function addroom(){

    localStorage.setItem("room_name", room_name)
  }
  