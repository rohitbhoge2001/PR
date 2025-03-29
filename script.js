document.getElementById('surprise-btn').addEventListener('click', function() {
    document.getElementById('love-song').play();
    createFloatingHearts();
    createSparkles();
    document.body.classList.add('active-bg');
});

function createFloatingHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        document.body.appendChild(heart);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.opacity = `${Math.random() + 0.3}`;
        heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

        setTimeout(() => { heart.remove(); }, 3000);
    }
}

function createSparkles() {
    for (let i = 0; i < 20; i++) {
        let sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        document.body.appendChild(sparkle);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        setTimeout(() => { sparkle.remove(); }, 1500);
    }
}
