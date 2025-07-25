const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const headerTitle = document.querySelector('header h1');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	headerTitle.classList.toggle('hide-title');
});

