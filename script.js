


let navLinks = document.querySelectorAll('nav ul li a');

let sections = document.querySelectorAll('section');

window.addEventListener('scroll' ,function() {
    const scrollPos = window.scrollY +20
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active');
                }
            })
        }
    })
})

// script.js
document.querySelectorAll('.toggle-btn').forEach((button) => {
  button.addEventListener('click', function () {
    const details = this.nextElementSibling;

    if (details.style.display === 'block') {
      details.style.display = 'none';
      this.textContent = 'Show Details';
    } else {
      details.style.display = 'block';
      this.textContent = 'Hide Details';

    }
  });
});


//contact

document.addEventListener("DOMContentLoaded", function(){
  const form = document.querySelector("form");
  const name_input = document.getElementById("name");
  const email_input = document.getElementById("email");
  const subject_input = document.getElementById("subject");
  const message = document.getElementById("msg");

  form/this.addEventListener("submit", function(){
    let is_valid = true;
    let message_err = [];

    if (name_input.value.trim() === ""){
      is_valid = false;
      message_err.push("You have to enter your name!")
    }
    if (email_input.value.trim() === ""){
      is_valid = false;
      message_err.push("You have to enter your valid email correctly!");
    }
    if (subject_input.value.trim() === ""){
      is_valid = false;
      message_err.push("You have to write your subject's name!");
    }
    if (message.value.trim() === ""){
      is_valid = false;
      message_err.push("Please, write your message here!");
    }

    if (!is_valid){
      e.preventDefault();
      alert(message_err.join("\n"));
    } else{
      alert("Congratulations! Your message sent succesfully! Thank you!");
      form.reset();
    }
  })
});


