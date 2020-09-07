import { difficultyContainer } from '../universal/selectors';

const hideDifficultyPicker = () => difficultyContainer.classList.remove('container__selecting-difficulty-container--shown');

export default hideDifficultyPicker;