

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add event 
form.addEventListener('submit', (event) => {  
    event.preventDefault(); //prevents default submission of the form
    validate();
})

const sendData = (usernameVal,sRate,count) => {
    if(sRate === count){
        alert('Registration Successful');
        swal("Welcome!", "Registration Successful", "success");  
        location.href = `calcy.html?username=${usernameVal}`;
        //`calcy.html?username=${usernameVal}`;
    }
}

//for final data validation
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i=0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(sRate,count);
        }else{
            return false;
        }
    }
}
 
//more email validate (indexOf() method returs the position of first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs)
const isEmail = (emailVal) => {
      var atSymbol = emailVal.indexOf("@");
      if(atSymbol < 1) return false;
      var dot = emailVal.lastIndexOf('.');
      if(dot <= atSymbol + 2) return false;   //after @ atleast 2 letters must be there then only dot mustbe used (keer@gm.)
      if(dot === emailVal.length - 1) return false; // tha@p.a   7 3 5   (tot,@,.)    tha@p. 6-5 3 5   this to check whether dot is used at last or not
      return true;   //if everything gets true then return true
}

//define the validate function (trims the white spaces before and after users input)
const validate = () => {
      const usernameVal = username.value.trim();
      const emailVal = email.value.trim();
      const phoneVal = phone.value.trim();
      const passwordVal = password.value.trim();
      const cpasswordVal = cpassword.value.trim();

//validate username
if(usernameVal === ""){
    setErrorMsg(username, 'username cannot be blank');
}else if(usernameVal.length <= 2){
    setErrorMsg(username, 'username min 3 character');
}else{
    setSuccessMsg(username);
}

//validate emailid
if(emailVal === ""){
    setErrorMsg(email, 'email cannot be blank');
}else if(!isEmail(emailVal)){
    setErrorMsg(email, 'Not a Valid Email');
}else{
    setSuccessMsg(email);
}

//validate phone number
if(phoneVal === ""){
    setErrorMsg(phone, 'Phone num cannot be blank');
}else if(phoneVal.length != 10){
    setErrorMsg(phone, 'Not a Valid Phone Number');
}else{
    setSuccessMsg(phone);
}

//validate password
if(passwordVal === ""){
    setErrorMsg(password, 'Password cannot be blank');
}else if(passwordVal.length <= 5){
    setErrorMsg(password, 'Minimum 6 Characters');
}else{
    setSuccessMsg(password);
}

//validate confirm password
if(cpasswordVal === ""){
    setErrorMsg(cpassword, 'Confirm Password cannot be blank');
}else if(passwordVal != cpasswordVal){
    setErrorMsg(cpassword, 'Password is not Matching');
}else{
    setSuccessMsg(cpassword);
}

successMsg();

}

function setErrorMsg(input, errormsgs){    //parameters  input will be ussername
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
2