// Side Nav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height : 500,
    transition : 600,
    interval : 3000
});

// Client Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Material Box
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scroll
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 25
});