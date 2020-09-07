/* Front container */
    export const frontContainer : HTMLDivElement = document.querySelector('.front-face');

    // navigation
    export const navigation : HTMLElement = document.querySelector('.front-face--nav');
    export const categoriesButtons : HTMLLIElement[] = Array.from(document.querySelectorAll('.front-face--nav-categories-holder-list-item'));
    export const seeNavButton : HTMLButtonElement = document.querySelector('.front-face--nav-social-media-holder-show-menu-btn');

    // images container
    export const imagesContainer : HTMLDivElement = document.querySelector('.front-face--images-container');

    // header
    export const searchInput : HTMLInputElement = document.querySelector('.front-face--header-search-holder-input');

    // other
    export const imagesArray : any[] = [];

/* Back container */
    export const backContainer : HTMLDivElement = document.querySelector('.back-face')

    // counters
        // timer
        export const timerMinutesContainer : HTMLSpanElement = document.querySelector('.timer-minutes');
        export const timerSecondsContainer : HTMLSpanElement = document.querySelector('.timer-seconds');
        // moves counter
        export const movesContainer : HTMLSpanElement = document.querySelector('.moves-ammount');

    // puzzle container
    export const puzzleContainer : HTMLDivElement = document.querySelector('.back-face--container-relative-puzzle-container');

    // exit puzzle
    export const quitPuzzleButton : HTMLButtonElement = document.querySelector('.back-face--container-relative-quit-btn');

    // see solution
    export const seeSolutionButton : HTMLButtonElement = document.querySelector('.back-face--container-relative-see-solution-btn');

/* Difficulty picker */
    export const difficultyContainer: HTMLDivElement = document.querySelector('.container--selecting-difficulty-container');
        // Children
        export const difficultyButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll('.container--selecting-difficulty-container-button'));
        export const hideDifficultyContainerButton: HTMLButtonElement = document.querySelector('.container--selecting-difficulty-container-exit-button');