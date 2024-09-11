/// Add event listener to the hamburger menu
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.contact-us').classList.toggle('active');
});