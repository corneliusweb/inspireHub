let openMenu = document.getElementById('topnav-container');
let button = document.getElementById('menu-btn');

button.addEventListener('click', function () {
   openMenu.style.display = 'block';
});

//
let close = document.getElementById('close-btn');
close.addEventListener('click', function () {
   openMenu.style.display = 'none';
});



let errorMsg = document.getElementById('error-message');
let mail = document.getElementById("email");
let email = mail.value;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const smileEmoji = '\u{1F600}';

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
   event.preventDefault();
   
   if(emailPattern.test(email)) {
      alert(`
         Thanks for subscribing!${smileEmoji}
         I would tell you to verify email, but I am still learning.
      `);
   }else{
      errorMsg.style.display = 'block';
   }
});

