//const getValueInput = () =>{
     // let inputValue = document.querySelector("#input_email").value; 
     // document.querySelector("#valueInput").innerHTML = `${inputValue}`; 
     // return getValueInput;
    //};
//const email =  getValueInput ();
//console.log(email);


const content = document.querySelector(".content");
const agradecimiento = document.querySelector(".agradecimiento");
const btnSubmit = document.querySelector(".btn--submit");
const btnDismiss = document.querySelector(".btn--agradecimiento");
let inputValue = document.querySelector("#input_text_email").value;
console.log(inputValue);

btnSubmit.addEventListener('submit', function(event){
  {   
  event.preventDefault();
  //  const emailUser = event.target.email.value;
   // console.log(emailUser);
  
    agradecimiento.classList.add("show--agradecimiento");
    content.classList.add("oculta--content");
    
  }
});

btnDismiss.addEventListener('click', function(){
  agradecimiento.classList.add("oculta--agradecimiento");
  content.classList.add("show--content");
  });
