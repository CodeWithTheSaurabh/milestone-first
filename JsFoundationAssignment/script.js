const heading = document.getElementById("heading");
const btn_btn = document.getElementById("btn-btn");

const toggleHeadingText  = btn_btn.addEventListener("click" ,()=>{
   if(heading.innerText === "“The most affordable learningplatform”") {
      heading.innerText = "“PW SKILLS”"
   }else{
    heading.innerText = "“The most affordable learningplatform”"
   }
    
})
console.log(toggleHeadingText);