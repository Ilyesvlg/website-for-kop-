function closePopup() {
	document.querySelector('.popup-container').classList.remove('active');
}

window.onload = function() {
	document.querySelector('.popup-container').classList.add('active');
}
