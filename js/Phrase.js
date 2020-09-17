/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase  {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**method to add placeholders to the display when the game begins
     * First had to split the string into substrings and then create an LI element for each character OR space
     * Adds class names
     * finally appends to the DOM
     */
    addPhraseToDisplay () {
        const splitPhrase = this.phrase.split('');
        const ul = document.querySelector('.section ul');
        const letterTest = /^\s/;
        splitPhrase.forEach (splitPhrase =>  {
        const li = document.createElement('LI');
        li.innerHTML = splitPhrase;
            if (letterTest.test(splitPhrase) === true) {
                li.className = 'space';
            } else {
                li.className = 'hide letter';
            }
        ul.appendChild(li);
        });
    }
    /**this will check the letter the user choses and compare it to the phrase */
    checkLetter(letter) {
        this.letter = letter;
        if(this.phrase.includes(this.letter)) {
            return true;
        } else {
            return false;
        }
    };
    /**first selects all the DOM elements that match the class name with the selected letter
     * subsequently replaces that class with show to reveal on page
     */
    showMatchedLetter(letter) {
        const letterElements = document.querySelectorAll('.letter');
        letterElements.forEach (li => {
            if(li.textContent === letter) {
                li.className = 'show';
            } 
        })
    }

}












