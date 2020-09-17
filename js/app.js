/**Instantiate a new game */
const game = new Game();
const button = document.getElementById('btn__reset');

/**click listener for the start of a new game after page load */
button.addEventListener('click', () => game.startGame());

/**event listeners for the keyboard letters
 * for each key a listener is added
 * clicking the button then calls the handleInteraction() method on the game object
 */
const keys = document.querySelectorAll('.key');
keys.forEach(key => { 
key.addEventListener('click', (e) => game.handleInteraction(e.target));
});

