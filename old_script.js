if (localStorage.getItem("loginDetails") === null) {
  const objPeople = [
    {
      username: "isak",
      password: "antin",
    },
    {
      username: "janne",
      password: "test",
    },
  ];
  const obj = JSON.parse(localStorage.getItem("loginDetails"));
  localStorage.setItem("loginDetails", JSON.stringify(objPeople));
}

if (localStorage.getItem('loggedIn')) {
	loggedInState();
} else {
	loggedOutState();
}

function login() {
	const username = document.getElementById("username").value; //get username value
	const password = document.getElementById("password").value; //get password value
  	document.getElementById("verification").innerHTML = ""; //clear <p> tag of previous log in attempts
  	const obj = JSON.parse(localStorage.getItem("loginDetails"));

  for (let i = 0; i < obj.length; i++) {//for loop that checks objPeople array
	if (username == obj[i].username && password == obj[i].password) { //checking if username and password input match array

		localStorage.setItem('loggedIn', true)
		localStorage.setItem('activeUser', username)
		loggedInState();
      };

      // stop the function if this is found to be true
      return;
    }
  const paragraph = document.getElementById("verification");
  const text = document.createTextNode("Wrong password, please try again.");
  paragraph.appendChild(text);
  paragraph.style.color = "#D62828";
  localStorage.getItem("loginDetails", JSON.stringify(objPeople));
}

function signUp() {
  const obj = JSON.parse(localStorage.getItem("loginDetails"));
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const entry = {
    username: username,
    password: password,
  };
  obj.push(entry);
  localStorage.setItem("loginDetails", JSON.stringify(obj));

  document.getElementById("verification").innerHTML =
    "User is registered, please log in";
}

function loggedInState() {
	document.getElementById("div1").innerHTML = "";
	const username = localStorage.getItem('activeUser') //get username value
	document.getElementById("login-form").style.visibility = "hidden"; //if true, hide login forms
	const welcomeH1 = document.createElement("h1"); //create H1 element that welcomes user
	const welcomeText = document.createTextNode(
	  `Welcome inside ${username}, have a great stay`
	); //H1 welcome message
	welcomeH1.appendChild(welcomeText); //append text to H1 tag
	const welcomeDiv = document.getElementById("div1"); //get div where H! will be displayed
	welcomeDiv.appendChild(welcomeH1); //append H1 tag to div

	const logoutBtn = document.createElement("BUTTON"); // Create a <button> element
	logoutBtn.innerHTML = "Log out"; // Insert text
	document.body.appendChild(logoutBtn); //append text to button
	welcomeDiv.appendChild(logoutBtn); //append logout button
	document.getElementById("div1").style.visibility = "visible";
	logoutBtn.onclick = function logout() {
	  //add logout button function
	  loggedOutState(); //reload the site to log out
}
};

function loggedOutState() {
	document.getElementById("login-form").style.visibility = "visible";
	document.getElementById("div1").style.visibility = "hidden";
}
