/* Open nav when user clicks on #navicon */
function openNav() {
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('menu').style.width = '100%';
    document.getElementById('navicon').style.display = 'none';
    document.getElementById('xicon').style.display = 'inline';
}

/* Close nav when user clicks on #xicon */
function closeNav() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById("menu").style.width = "0%";
    document.getElementById('navicon').style.display = 'inline';
    document.getElementById('xicon').style.display = 'none';    
}
