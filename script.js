/* script.js */
document.getElementById('surprise-btn').addEventListener('click', function() {
    document.getElementById('love-song').play();
    createFloatingHearts();
});

function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
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

        setTimeout(() => { heart.remove(); }, 3000);
    }
}
