const images = ["1.png", "2.png", "3.png", "4.jpg", "5.jpeg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.png"];



// Keep generating a new random index until a different image is chosen
const chosenImage = images[Math.floor(Math.random()*images.length)];



const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.id = 'bgImage';
