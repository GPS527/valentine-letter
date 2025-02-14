function uploadMemory() {
    const fileInput = document.getElementById('uploadMemory');
    const files = fileInput.files;
    const container = document.getElementById('polaroidsContainer');

    for (let i = 0; i < files.length; i++) {
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
        reader.readAsDataURL(files[i]);
    }
}

function deleteMemory(button) {
    const polaroid = button.parentElement;
    polaroid.classList.add('fadeOut');
    setTimeout(() => {
        polaroid.remove();
    }, 500); // Matches animation duration
}

function sendLetter() {
    alert('Your Valentine letter has been sent!');
}

function createFloatingHearts() {
    const heartContainer = document.getElementById('floatingHearts');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';

        // Randomize size, position, and animation duration
        const size = Math.random() * 20 + 10; // Size between 10px and 30px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        heart.style.left = Math.random() * 100 + 'vw';

        const animationDuration = Math.random() * 5 + 5; // Duration between 5s and 10s
        heart.style.animationDuration = `${animationDuration}s`;

        // Randomize heart color
        const colors = ['#ff6b81', '#ff4757', '#ff7f50', '#ff6348', '#ff1493'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.backgroundColor = color;

        heartContainer.appendChild(heart);

        // Remove heart after animation is complete
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000);
    }, 500); // Create a new heart every 0.5 seconds
}

createFloatingHearts();
