var typed = new Typed('#element', {
    strings: ['Full Stack Developer.', 'Graphic Designer', 'Web Designer', 'Photographer', 'Ethical Hacker'],
    typeSpeed: 50,
    loop: true, // Set loop to true for infinite loop
});


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}