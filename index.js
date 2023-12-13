//Selecteurs
// document.querySelector("h4").style.background ="yellow";
/*const baliseHTML = document.querySelector("h4");
console.log(baliseHTML);
baliseHTML.style.background ="yellow";*/

//click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// questionContainer.style.borderRadius = "150px";
questionContainer.addEventListener("click", () =>{
   /* questionContainer.style.background = "red";
    questionContainer.style.border= "3px solid teal";*/
 questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click",() =>{
response.classList.add("show-response");
response.style.background ="green";
});

btn2.addEventListener("click",() =>{
 response.classList.add("show-response");
response.style.background ="red";
});

/* <div style"></div> est > #id > .class > baliseHTML */

//---------------------------------------------------------
// Mouse Event
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove" , (e) =>{
//  console.log(e.target);
mousemove.style.left= e.pageX + "px"
mousemove.style.top= e.pageY + "px"
});

window.addEventListener("mousedown" ,() =>{
mousemove.style.transform = "scale(2) translate(-25% , -25%)";
});

window.addEventListener("mouseup" ,() =>{
mousemove.style.transform ="scale(1) translate(-50% , -50%)";
mousemove.style.border="2px solid teal";   
});

questionContainer.addEventListener("mouseenter", ()=>{
questionContainer.style.background = "rgb(0,0,0,0.6)"
});
questionContainer.addEventListener("mouseout", ()=>{
// console.log("mouseout !");   
questionContainer.style.background="pink";
});

response.addEventListener("mouseover", ()=>{
response.style.transform= "rotate(2deg)";
});
 
//-------------------------------------------------
//keyPress event
const keypressContainer = document.querySelector(".keypress");
// console.log(keypressContainer);
const key = document.getElementById("key");
const ring = () =>{
   const audio = new Audio();
   audio.src="N56BNFY-click.mp3";
   audio.play();
}
document.addEventListener("keypress", (e) =>{
key.textContent= e.key;

if(e.key === "j"){
   keypressContainer.style.background="pink";
}else if(e.key ==="h"){
   keypressContainer.style.background="teal";  
}else{
   keypressContainer.style.background="red";  
}
ring();
});

//-------------------------------------------------------------------------
// scroll Event

const nav = document.querySelector("nav");
window.addEventListener("scroll", (e) =>{
if(window.scrollY > 20){
   nav.style.top = "-50px";
}else{
   nav.style.top=0;
 console.log(window.scrollY)
}
});
//-----------------------------------------------------------------------
// Form Event 

const inputName =document.querySelector("input[type='text']");
inputName.addEventListener("input", (e) =>{
console.log("test",querySelector)
console.log('test', inputName);
});
