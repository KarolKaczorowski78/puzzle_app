import { difficultyContainer } from '../universal/selectors';

const askForDifficulty = () => {
    difficultyContainer.classList.add('container--selecting-difficulty-container__shown')
}

export default askForDifficulty;