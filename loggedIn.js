let firebaseConfig = {
    apiKey: "AIzaSyCRLMv7lriAw41uX4WlE7DIsS09icfkdyM",
    authDomain: "techno-vedha.firebaseapp.com",
    databaseURL: "https://techno-vedha-default-rtdb.firebaseio.com",
    projectId: "techno-vedha",
    storageBucket: "techno-vedha.appspot.com",
    messagingSenderId: "622740569536",
    appId: "1:622740569536:web:1be3a00fabc0a926645c25",
    measurementId: "G-15Y1XM7TFH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// use firebase's signout method.
let logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', function(e) {
    firebase.auth().signOut().then(() => {
        console.log('Logging out...');
        // direct to main login/resgistration page
        window.location.href = './index.html';
    }).catch(err => {
        console.log(err);
    })
});
