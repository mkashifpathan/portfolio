var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Photographer', 'Ethical Hacker'],
    typeSpeed: 50,
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}