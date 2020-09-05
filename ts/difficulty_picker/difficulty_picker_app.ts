import { difficultyButtons, hideDifficultyContainerButton } from '../universal/selectors';
import chooseAmmount from './choose_ammount';
import hideDifficultyPicker from './hide_difficulty_picker';

const difficultyPickerApp = () => {
    difficultyButtons.forEach(btn => btn.addEventListener('click', chooseAmmount))
    hideDifficultyContainerButton.addEventListener('click', hideDifficultyPicker);
}

export default difficultyPickerApp;