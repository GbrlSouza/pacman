document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.getElementById('pacman');
    const gameContainer = document.getElementById('game-container');
    let pacmanPosition = { top: 50, left: 50 };
    let step = 5;

    function movePacman(direction) {
        switch (direction) {
            case 'ArrowUp':
                if (pacmanPosition.top > 0) {
                    pacmanPosition.top -= step;
                }
                break;
            case 'ArrowDown':
                if (pacmanPosition.top < gameContainer.offsetHeight - pacman.offsetHeight) {
                    pacmanPosition.top += step;
                }
                break;
            case 'ArrowLeft':
                if (pacmanPosition.left > 0) {
                    pacmanPosition.left -= step;
                }
                break;
            case 'ArrowRight':
                if (pacmanPosition.left < gameContainer.offsetWidth - pacman.offsetWidth) {
                    pacmanPosition.left += step;
                }
                break;
        }
        pacman.style.top = `${pacmanPosition.top}px`;
        pacman.style.left = `${pacmanPosition.left}px`;
    }

    window.addEventListener('keydown', (event) => {
        movePacman(event.key);
    });
});
