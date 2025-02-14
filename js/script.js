function uploadMemory() {
    const fileInput = document.getElementById('uploadMemory');
    const files = fileInput.files;
    const container = document.getElementById('polaroidsContainer');

    if (files.length === 0) {
        alert('Please select at least one image.');
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const polaroid = document.createElement('div');
                polaroid.className = 'polaroid';
                polaroid.innerHTML = `
                    <button type="button" onclick="deleteMemory(this)">×</button>
                    <img src="${event.target.result}" alt="Memory">
                `;
                container.appendChild(polaroid);
            };

            reader.readAsDataURL(file);
        } else {
            alert('Please select only image files.');
        }
    }

    // Clear the file input so the same file can be uploaded again if needed
    fileInput.value = '';
}

function deleteMemory(button) {
    const polaroid = button.parentElement;
    polaroid.remove();
}

function sendLetter() {
    alert('Your Valentine letter has been sent!');
}

function createFloatingItems() {
    const heartContainer = document.getElementById('floatingHearts');
    const images = [
        'images/heart.png',
        'images/cupid.png',
        'images/rose.png',
        // Add paths to your images
    ];

    setInterval(() => {
        const item = document.createElement('div');
        item.className = 'floating-item';

        // Randomize image
        const imgIndex = Math.floor(Math.random() * images.length);
        item.style.backgroundImage = `url('${images[imgIndex]}')`;

        // Randomize size
        const size = Math.random() * 20 + 40; // Size between 40px and 60px
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;

        // Randomize position
        item.style.left = Math.random() * 100 + 'vw';

        // Randomize animation duration
        const duration = Math.random() * 5 + 5; // Duration between 5s and 10s
        item.style.animationDuration = `${duration}s`;

        heartContainer.appendChild(item);

        // Remove item after animation is complete
        setTimeout(() => {
            item.remove();
        }, duration * 1000);
    }, 800);
}

createFloatingItems();
