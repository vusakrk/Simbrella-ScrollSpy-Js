var section = document.querySelectorAll('section');
var navlinks = document.querySelectorAll('nav ul li a');
window.onscroll = () => {
    section.forEach(sect => {
        var top = window.scrollY;
        var offset = sect.offsetTop;
        var height = sect.offsetHeight;
        var id = sect.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};