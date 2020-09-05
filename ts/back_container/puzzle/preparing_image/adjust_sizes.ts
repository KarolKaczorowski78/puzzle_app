import { puzzleContainer } from '../../../universal/selectors';

const adjustSizes = (ammountOfPuzzles: number): void => {
    const puzzle: HTMLButtonElement = document.querySelector('.puzzle');
    const getWidth = (): number => puzzle.offsetWidth * ammountOfPuzzles + puzzle.offsetWidth * 0.2;
    
    puzzleContainer.style.width = `${getWidth()}px`;
}

export default adjustSizes;