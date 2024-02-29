
// const validName =document.getElementById("username");
// const validPassword =document.getElementById("password");
// const validContact=document.getElementById("tel");


// function submt() {
  // let value = document.getElementById("username").value;
  // let passwordVal = document.getElementById("password").value;
  // let contact=document.getElementById("tel").value;
  // let validage=document.getElementById("age").value; 

  // let hname = document.getElementById("hname");

  // console.log(value);
  // console.log(passwordVal);
  // console.log(contact);
  // console.log(validage);

  // let userNameFiled = isEmpty(value);
  // let passwordFiled = isEmpty(passwordVal);
  // let contactFiled= isEmpty(contact);
  // let ageFiled=isEmpty(validage);

  // if (!userNameFiled && !passwordFiled && !contactFiled && !ageFiled) {
  //   value === value && passwordVal === passwordVal && contact === contact && validateAge(validage)
  //     ? (alert(value + " you are Successfully loged"),
  //       (hname.value = value),
  //       setTimeout(() => {
  //         window.location.href = "http://127.0.0.1:5500/html/nphome.html";
  //         alert("WELCOME TO NPtourism");

  //       }))

  //     : alert("Login failed");
  // } else {
  //   error.innerHTML = `<h4 style= color:red;>You have to fill correct data</h4>`;
  //   setTimeout(() => {
  //     error.innerHTML = "";
  //   }, 3000);
  // }
// }

alert("If you are new to this website please first do register");

function validateUserName(name) {
  console.log('name : ', name);
  value === name
    ? (error.innerHTML = "")
    : (error.innerHTML = `<h4 style= color:red;>Incorrect username: ${name}</h4>`);
}


function validatePassword(password) {
  passwordVal === password
    ? (error.innerHTML = "")
    : (error.innerHTML = `<h4 style= color:red;>Incorrect password.</h4>`);
}

function validateContact(cnt){
    contact==cnt?(error.innerHTML = "") :(error.innerHTML=`<h4 style= color:red;>Inncorect contact number.</h4>`);

}

function validateAge(age) {
  let flag = false
   age >= validAge
    ? (flag = true, error.innerHTML = "")
    : (flag = false, error.innerHTML = `<h4 style= color:red;>Yours age is  less then 18 you cant able to login </h4>`);
    return flag;
}

function isEmpty(value) {
  return value === "" || value === undefined ? true : false;
}




var dialog = document.getElementById("myDialog");
var btn = document.getElementById("openDialog");
var span = document.getElementsByClassName("close-button")[0];


span.onclick = function() {
  dialog.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == dialog) {
      dialog.style.display = "none";
  }
}





//main logic start



const error = document.getElementById("error");
const validAge =  18; //document.getElementById("age");



btn.onclick = function() {
    // dialog.style.display = "block";

  let value = document.getElementById("username").value;
  let passwordVal = document.getElementById("password").value;
  let contact=document.getElementById("tel").value;
  let validage=document.getElementById("age").value; 

  let hname = document.getElementById("hname");

  console.log(value);
  console.log(passwordVal);
  console.log(contact);
  console.log(validage);

  let userNameFiled = isEmpty(value);
  let passwordFiled = isEmpty(passwordVal);
  let contactFiled= isEmpty(contact);
  let ageFiled=isEmpty(validage);

  if (!userNameFiled && !passwordFiled && !contactFiled && !ageFiled) {
    value === value && passwordVal === passwordVal && contact === contact && validateAge(validage)
      ? (alert(value + " you are completly registerd "),
      dialog.style.display = "block",

        (hname.value = value),
        setTimeout(() => {
          window.location.href = "http://127.0.0.1:5500/html/nphome.html";
        },3000))

        : alert("Login failed");


  } else {
    error.innerHTML = `<h4 style= color:red;>You have to fill the correct data</h4>`;
    setTimeout(() => {
      error.innerHTML = "";
    }, 3000);
  }
}


