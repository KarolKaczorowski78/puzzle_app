import { difficultyContainer } from '../universal/selectors';

const askForDifficulty = () => {
    difficultyContainer.classList.add('shown-selecting-difficulty-container');
}

export default askForDifficulty;