const submnit = document.querySelector("#submit");

const overlay = document.querySelector('.overlay');
const successContainer = document.querySelector('.success-container');

let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let numberRegax = /^[\d-]{10,10}$/;
function sendMail() {
  let params = {
    fname: document.querySelector("#firstname").value,
    lname: document.querySelector("#lastname").value,
    mail: document.querySelector("#email").value,
    number: document.querySelector("#number").value,
  };
  let emailValidate = emailRegex.test(params.mail);
  let numberValidate = numberRegax.test(params.number);
  console.log(emailValidate);
  console.log(numberValidate)
  
  // if(params.fname && params.lname && params.mail && params.number){
   
    if(params.fname == ""){
      document.querySelector("#firstname").style.border = "1.2px solid red"
    }
    if(params.lname == ""){
      document.querySelector("#lastname").style.border = "1.2px solid red"
    }
    if(!emailValidate){
      document.querySelector("#email").style.border = "1.2px solid red"
    }
    if(!numberValidate){
      document.querySelector("#number").style.border = "1.2px solid red";
      document.querySelector(".error").style.opacity = 1;
    }

    if(emailValidate && numberValidate) {
      // overlay.classList.add("show-overlay");
      // successContainer.classList.add("show-success")
       emailjs
         .send("service_8b6wpj9", "template_wcysl3o", params)
         .then((res) => {
  
           overlay.classList.add("show-overlay");
           successContainer.classList.add("show-success");
           console.log(res)
          
         })
         .catch((err) => console.log(err));
}

    
  }

submnit.addEventListener("click", sendMail)