let openMenu = document.getElementById('topnav-container');
let button = document.getElementById('menu-btn');
let close = document.getElementById('close-btn');

//
button.addEventListener('click', () => {
	openMenu.style.display = 'block';
});

//
close.addEventListener('click', () => {
	openMenu.style.display = 'none';
});

let errorMsg = document.getElementById('error-message');
let email = document.getElementById('email');
const emailPattern = /^\w+([-.]\w+)?(-\w+)?@\w+(-\w+)?\.\w{2,3}(\.\w{2,3})?$/gi;

document
	.getElementById('newsletterForm')
	.addEventListener('submit', (event) => {
		event.preventDefault();

		if (emailPattern.test(email.value)) {
			//
			alert(
				`Thanks for subscribing!🥳\nThis is still up because of the vercel link. Try the netlify link`
			);
			this.submit();

			// email.value = "";
			//
		} else {
			errorMsg.style.display = 'block';
		}
	});
