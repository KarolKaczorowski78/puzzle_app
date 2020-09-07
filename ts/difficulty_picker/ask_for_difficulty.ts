import { difficultyContainer } from '../universal/selectors';

const askForDifficulty = () => {
    difficultyContainer.classList.add('container__selecting-difficulty-container--shown')
}

export default askForDifficulty;