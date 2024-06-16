document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    
    // Initialize game variables
    let enemies = [];
    let towers = [];
    let bullets = [];
    
    // Example function to create an enemy
    function createEnemy() {
        let enemy = document.createElement('div');
        enemy.className = 'enemy';
        enemy.style.left = '0px';
        enemy.style.top = '100px';
        gameContainer.appendChild(enemy);
        enemies.push(enemy);
    }

    // Example function to create a tower
    function createTower() {
        let tower = document.createElement('div');
        tower.className = 'tower';
        tower.style.left = '200px';
        tower.style.top = '400px';
        gameContainer.appendChild(tower);
        towers.push(tower);
    }

    // Call the functions to add enemies and towers
    createEnemy();
    createTower();
});
