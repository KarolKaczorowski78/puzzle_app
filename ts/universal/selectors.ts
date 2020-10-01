/* Front container */
    export const frontContainer : HTMLDivElement = document.querySelector('.container__face--front');

    // navigation
    export const navigation : HTMLElement = document.querySelector('.front-face__nav');
    export const categoriesButtons : HTMLLIElement[] = Array.from(document.querySelectorAll('.front-face__nav__categories-list-item'));
    export const seeNavButton : HTMLButtonElement = document.querySelector('.front-face__nav__show-menu-btn');

    // images container
    export const imagesContainer : HTMLDivElement = document.querySelector('.front-face__images-container');

    // header
    export const searchInput : HTMLInputElement = document.querySelector('.front-face__header__search-holder-input');

    // other
    export const imagesArray : any[] = [];

/* Back container */
    export const backContainer : HTMLDivElement = document.querySelector('.container__face--back')

    // counters
        // timer
        export const timerMinutesContainer : HTMLSpanElement = document.querySelector('.timer-minutes');
        export const timerSecondsContainer : HTMLSpanElement = document.querySelector('.timer-seconds');
        // moves counter
        export const movesContainer : HTMLSpanElement = document.querySelector('.moves-ammount');

    // puzzle container
    export const puzzleContainer : HTMLDivElement = document.querySelector('.back-face__puzzle-container');

    // exit puzzle
    export const quitPuzzleButton : HTMLButtonElement = document.querySelector('.back-face__quit-btn');

    // see solution
    export const seeSolutionButton : HTMLButtonElement = document.querySelector('.back-face__see-solution-btn');

/* Difficulty picker */
    export const difficultyContainer: HTMLDivElement = document.querySelector('.container__selecting-difficulty-container');
        // Children
        export const difficultyButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll('.container__selecting-difficulty-container__button'));
        export const hideDifficultyContainerButton: HTMLButtonElement = document.querySelector('.container__selecting-difficulty-container__exit-button');