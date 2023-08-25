const btn =document.getElementById("button");
const form =document.getElementById("Form");
const popup =document.querySelector(".popup");
const okBtn =document.getElementById("Ok-Btn");
const menuBtn = document.querySelector(".menubtn");
const navBar = document.querySelector('.nav-bar');


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(e.target);
      btn.value = "Sending....";

      const serviceId = 'service_g2ra26o';
      const templateId = 'template_wo9b3ui';
      emailjs.sendForm(serviceId,templateId,"form")
      .then(()=>{
        btn.value='Send Email';
        popup.children[1].textContent = "Your messsage send successfully.";
        popup.style.display = "block";
      },(err)=>{
        btn.value='Send Email';
        alert(JSON.stringfy(err));
      })
});

okBtn.addEventListener('click',()=>{
  popup.style.display = "none";
})

console.log(popup.children[1].textContent);


// menu button function

menuBtn.addEventListener('click',()=>{
  navBar.classList.toggle("show");
})
