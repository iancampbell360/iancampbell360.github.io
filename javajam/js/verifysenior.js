var age = prompt('Please enter your age: ')

if (age >= 65) {
    document.getElementById('verify').innerHTML = 'Free Friday Coffee Night for Seniors!';
    document.getElementById('verify').style.fontWeight = 'bold'
} else {
    document.getElementById('verify').innerHTML = 'Enjoy Music and Make Memories!';
}