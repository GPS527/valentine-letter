function createFloatingItems() {
    const container = document.getElementById('floatingHearts');
    const images = [
        'images/heart1.png',
        'images/heart2.png',
        'images/teddy1.png',
        'images/chocolate1.png',
        'images/cupid.png',
        // Add paths to all your images
    ];

    setInterval(() => {
        const item = document.createElement('div');
        item.className = 'floating-item';

        // Randomly select an image
        const imgIndex = Math.floor(Math.random() * images.length);
        item.style.backgroundImage = `url('${images[imgIndex]}')`;

        // Randomize size between 30px and 60px
        const size = Math.random() * 30 + 30;
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;

        // Randomize position along the X-axis
        item.style.left = Math.random() * 100 + 'vw';

        // Randomize animation duration between 5s and 10s
        const duration = Math.random() * 5 + 5;
        item.style.animationDuration = `${duration}s`;

        // Append to container
        container.appendChild(item);

        // Remove the item after animation
        setTimeout(() => {
            item.remove();
        }, duration * 1000);
    }, 800); // Adjust the interval as needed
}

// Call the function to start the animations
createFloatingItems();
