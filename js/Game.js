/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game  {
    constructor () {
        //begins the miss counter at zero followed by the array to store the phrases
        this.missed = 0;
        this.phrases = [
            {phrase: "Keep slinging those discs"},
            {phrase: "peace love ultimate"},
            {phrase: "peace love chains"},
            {phrase: "get that parkour"},
            {phrase: "Fight like a crow"},
        ];
        this.activePhrase = null;
    }
    /**method to return a random phrase from the phrases array */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * Math.floor(this.phrases.length))];
    } 
    /**first hides the overlay
     * selects a random phrase and sets the activePhrase property to the it
     * the addPhraseToDisplay method is called to the active phrase to display the correct number of boxes
     */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        
        const randomPhrase = this.getRandomPhrase();
        const showPhrase = new Phrase(randomPhrase.phrase);
        showPhrase.addPhraseToDisplay();
        this.activePhrase = showPhrase;
    }
    /**Once there are no longer any elements with a CSS class with the name hide, the game is over */
    checkForWin() {
        let hiddenLetters = document.getElementsByClassName('hide');
        if(hiddenLetters.length === 0) {
           this.gameOver(true);
        }
    };
    /**adds to the miss counter as well as changes a live heart to a lost heart
     * If the missed counter equals 5 the game is over
     */
    removeLife() {
        this.missed += 1;
        const liveHeart = document.querySelector("img[src='images/liveHeart.png']");
        liveHeart.src = 'images/lostHeart.png';
        if (this.missed === 5) {
           this.gameOver(); 
        }
    };
    /**this method will display the original start screen depending onthe outcome of the game
     * this method ALSO resets the page regardless of the outcome
     * Also the overlay CSS class will update based on the outcome
     */
    gameOver(gameWon) {
        const h1 = document.getElementById('game-over-message');
        const listItems = document.querySelectorAll('#phrase li');
        const chosenKey = document.querySelectorAll('.chosen');
        const wrongKey = document.querySelectorAll('.wrong');
        let lostHeart = document.querySelectorAll('img[src="images/lostHeart.png"]');
console.log(lostHeart);

        console.log(listItems);
        overlay.style.display = '';
        if (gameWon === true) {
            h1.textContent = 'Congratulations You WON!';
            overlay.className = 'win';
            //These are all for resetting the page
            listItems.forEach(li => li.remove());
            chosenKey.forEach(key => key.className = 'key');
            wrongKey.forEach(key => key.className = 'key');
            chosenKey.forEach(key => key.disabled = false);
            wrongKey.forEach(key => key.disabled = false);
            this.missed = 0;
            lostHeart.forEach(heart => heart.src = 'images/liveHeart.png')
        } else if (this.missed === 5) {
            h1.textContent = 'Sorry, better luck next time!';
            overlay.className = 'lose';
            //resetting the page
            listItems.forEach(li => li.remove());
            chosenKey.forEach(key => key.className = 'key');
            wrongKey.forEach(key => key.className = 'key');
            chosenKey.forEach(key => key.disabled = false);
            wrongKey.forEach(key => key.disabled = false);
            this.missed = 0;
            lostHeart.forEach(heart => heart.src = 'images/liveHeart.png')
    };
}
/**this is where everything comes together finally
 * buttons are disabled once they are pressed and class names are updated for each key
 * If the guessed letter is part of the phrase through the CheckLetter method, showMatchedLetter is called 
 * to display as well as CheckForWin
 * If the player has won the game then the gameOver method is called
 */
    handleInteraction(button) {
        console.log(button);
        if (this.activePhrase.checkLetter(button.textContent) === false) {
            button.className = 'wrong';
            button.disabled = true;
            this.removeLife();
        } else {
            button.className = 'chosen';
            button.disabled = true;
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
            }
        }
    
    };


