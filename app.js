function colorchange() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let randomcolor = `rgb(${r},${g},${b})`; // Keep the random color

    let body = document.querySelector('body'); // Select the body
    body.style.backgroundColor = randomcolor; // Apply the random color to the body
    console.log(randomcolor); // Log the actual random color
    refreshImage()
}
function refreshImage() {
    let img = document.querySelector('img');
    img.src = `https://picsum.photos/400?random=${Math.random()}`
}
function changeBackground() {
    // Choose a new background image URL
    let imageUrl = `https://picsum.photos/400?random=${Math.random()}`
    // Set the background image of the body
    let body = document.querySelector('body');
    body.style.backgroundImage = `url(${imageUrl})`;
    body.style.backgroundSize = 'cover';
    // Optional: Ensures the image covers the entire background
    body.style.backgroundRepeat = 'no-repeat';
    // Optional: Prevents the image from repeating
}