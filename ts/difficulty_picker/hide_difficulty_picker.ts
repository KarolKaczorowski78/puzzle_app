import { difficultyContainer } from '../universal/selectors';

const hideDifficultyPicker = () => difficultyContainer.classList.remove('shown-selecting-difficulty-container');

export default hideDifficultyPicker;