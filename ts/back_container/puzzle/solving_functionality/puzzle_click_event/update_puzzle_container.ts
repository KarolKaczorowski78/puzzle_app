import { puzzleContainer } from '../../../../universal/selectors';

const updatePuzzleContainer = (arr: HTMLButtonElement[]) => {
    puzzleContainer.innerHTML = '';

    arr.forEach(button => puzzleContainer.appendChild(button))
}

export default updatePuzzleContainer;