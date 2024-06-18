user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCsRHZGteDKDIxZUsxAy2CzO7BPkxaVBtw",
      authDomain: "project96-e0049.firebaseapp.com",
      databaseURL: "https://project96-e0049-default-rtdb.firebaseio.com",
      projectId: "project96-e0049",
      storageBucket: "project96-e0049.appspot.com",
      messagingSenderId: "1073938527386",
      appId: "1:1073938527386:web:e76b315264c612c61b1b23"
    };
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
 function back(){
  window.location = "kwitter_room.html";
 }

 function send(){

//take the value of the text input from html-- document.getElementById('msg').value
 msg = document.getElementById('msg').value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }


    //Add the code for the logout button
    function logout(){

      //remove username from the local storage- removeItem("user_name")
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
    window.location = "index.html";
    }
