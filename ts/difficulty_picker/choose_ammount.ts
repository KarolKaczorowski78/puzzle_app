import solvePuzzle from '../back_container/puzzle/start_solving';
import DifficultyPicker from './difficulty_picker_image';
import hideDifficultyPicker from './hide_difficulty_picker';

function chooseAmmount() {
    const chosenAmmount: number = parseInt(this.value);
    solvePuzzle(DifficultyPicker.currentImage, chosenAmmount);
    hideDifficultyPicker();
}

export default chooseAmmount;