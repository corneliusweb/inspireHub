let openMenu = document.getElementById('topnav-container');
let button = document.getElementById('menu-btn');
let close = document.getElementById('close-btn');

//
button.addEventListener('click', function () {
   openMenu.style.display = 'block';
});

//
close.addEventListener('click', function () {
   openMenu.style.display = 'none';
});



let errorMsg = document.getElementById('error-message');
let email = document.getElementById('email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
   event.preventDefault();
   
   if(emailPattern.test(email.value)) {
      //
      alert(`Thanks for subscribing!🥳 \n This is still up because of the vercel link. Try the netlify link`);
      this.submit();

      // email.value = "";
      //
   } else {
      errorMsg.style.display = 'block';
   }
});

