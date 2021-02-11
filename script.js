
if (localStorage.getItem("loginDetails") === null) {
  const objPeople = [
    {
      username: "isak",
      password: "antin",
    },
    {
      username: "janne",
      password: "test",
    }
  ];
  localStorage.setItem("loginDetails", JSON.stringify(objPeople));
}

const verification = document.getElementById('verification');
const inlogged = document.getElementById('div1');
const loginForm = document.getElementById('login-form');

class Session{
  constructor(){
      this.login = (localStorage.getItem('loggedIn') == 'true'); 
      this.user = localStorage.getItem('username');
  }
  setUser = () => {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let users = JSON.parse(localStorage.getItem("loginDetails"))
      let added = true;
      for(let i = 0; i < users.length;i++){
          if(username == users[i].username){
            added = false;
          }
      }
      if(added == true){
        users.push({
          username:username,
          password:password
        })
      }else{
        verification.innerHTML = 'The user already exists';
      }
      localStorage.setItem("loginDetails", JSON.stringify(users));
  }
  setLogin = () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let users = JSON.parse(localStorage.getItem("loginDetails"))
        for(let i = 0; i < users.length;i++){
            if(username == users[i].username){
              this.user = username
                if(password == users[i].password){
                    this.login = true;
                    this.user = username;
                }else{
                    verification.innerText = 'You got the wrong password.'
                }   
            }
        }
        if(this.user == null || this.user == undefined || this.user == false){
          verification.innerText = 'You got the wrong username.'
        }

        if(this.login == true){
          localStorage.setItem('loggedIn', this.login)
          localStorage.setItem('username', this.user)
          this.show()
        }
    }
    show = () => {
      inlogged.innerHTML = ""; 
      inlogged.innerHTML += "<h2>Welcome to Slappin' Burgers, " + this.user + "</h2>"
      inlogged.innerHTML += "<button onclick='session.logOut()'>Log out</button>"
      loginForm.style.visibility = "hidden";
    }
    logOut = () => {
      localStorage.removeItem('username');
      localStorage.setItem('loggedIn', false);
      window.location.reload();
    }
  }

var session = new Session()
var state = localStorage.getItem('loggedIn')

if(state == 'true'){
  session.show();
}
