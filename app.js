function colorchange() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let randomcolor = `rgb(${r},${g},${b})`; // Keep the random color

    let body = document.querySelector('body'); // Select the body
    body.style.backgroundColor = randomcolor; // Apply the random color to the body
    console.log(randomcolor); // Log the actual random color
}
