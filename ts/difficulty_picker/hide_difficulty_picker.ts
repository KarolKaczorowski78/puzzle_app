import { difficultyContainer } from '../universal/selectors';

const hideDifficultyPicker = () => difficultyContainer.classList.remove('container--selecting-difficulty-container__shown');

export default hideDifficultyPicker;