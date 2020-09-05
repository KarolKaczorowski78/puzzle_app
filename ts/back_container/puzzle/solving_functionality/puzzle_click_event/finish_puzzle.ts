import Timer from '../../../measurers/timer/timer';
import DifficultyPickerImage from '../../../../difficulty_picker/difficulty_picker_image';
import { puzzleContainer } from '../../../../universal/selectors';

const finishPuzzle = (): void => {
    Timer.stop();

    setTimeout(() => {
        const { currentImage } = DifficultyPickerImage;
        currentImage.className = 'finished-image';

        puzzleContainer.innerHTML = '';
        puzzleContainer.appendChild(currentImage);
    }, 200);
}

export default finishPuzzle;