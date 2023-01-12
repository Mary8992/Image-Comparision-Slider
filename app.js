let slide = document.getElementById('slide');
window.onmouseover = function (e) {
    let x = e.clientX;
    slide.style.left = x + 'px';
}