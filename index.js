const body = document.getElementById("body")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

document.getElementById('leaf-img').addEventListener('click', function() {
    body.classList.remove('snow', 'ornament-img', 'reindeer-img')
    body.classList.add('leaf-img')
})
document.getElementById('tree-img').addEventListener('click', function() {
    body.classList.remove('snow','leaf-img', 'ornament-img', 'reindeer-img')
    body.classList.add('christmas')
})
document.getElementById('snow-img').addEventListener('click', function() {
    body.classList.remove('leaf-img', 'ornament-img', 'reindeer-img')
    body.classList.add('snow')
})
document.getElementById('ornament-img').addEventListener('click', function() {
    body.classList.remove('leaf-img', 'snow', 'reindeer-img')
    body.classList.add('ornament-img')
})
document.getElementById('reindeer-img').addEventListener('click', function() {
    body.classList.remove('leaf-img', 'snow', 'ornament-img')
    body.classList.add('reindeer-img')
})

