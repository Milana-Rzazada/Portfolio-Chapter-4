let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

let typed = new Typed('.auto-input',{
    strings: ['Mathematics teacher.', 'Web Developer.', 'Front-end Developer.'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

const words = new Typed('#words', {
      strings: [
        "I'm a Front-End developer and Web Developer.",
        "I have over 3 years of work experience in this field. I have studied in this field, developed projects, and gained experience both in Azerbaijan and Canada.",
        "Welcome to my Portfolio website about myself and the work I do! You can see some of the projects I have completed in the Projects section.",
        "Enjoy browsing my portfolio!",
        
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    const thanks = new Typed('#thanks-typed', {
      strings: [
        "I hope you liked my portfolio.",
        "If you're reading this post, it means you've read my portfolio all the way through.",
        "Thank you for your attention and for the time you have given me!",
        "SEE YOU!",
        
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });