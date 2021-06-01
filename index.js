// import our functions from ourFunctions.js
const ourFunctions = require('./ourFunctions.js');

// ===== Firebase configuration (start) ==== //
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
// ===== Firebase configuration (end) ==== //

// button variables
let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let submitBtn = document.getElementById('submitBtn');
// input field variables
let userInput = document.getElementById('login');
let passInput = document.getElementById('password');


// login tab
loginBtn.addEventListener('click', function(e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    registerBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Login';
});

//register tab
registerBtn.addEventListener('click', function(e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    loginBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Register';
});

// submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (submitBtn.value === 'Register') {
        // check if any inputs are empty
        if (ourFunctions.checkIfInputEmpty(userInput.value, passInput.value)) {
            console.log('Please fill in all fields.');
        } else {
                ourFunctions.registerUser(userInput.value, passInput.value);
            }
    } else if (submitBtn.value === 'Login') {
        ourFunctions.loginUser(userInput.value, passInput.value);
    }
})
