import updatePuzzleContainer from '../update_puzzle_container';
import animatedReplace from './animated_replace';

const replacePuzzles = (btn: HTMLButtonElement, emptyBtn: HTMLButtonElement, arr: HTMLButtonElement[]): HTMLButtonElement[] => {
    const chosenPuzzleIndex: number = arr.indexOf(btn);
    const emptyPuzzleIndex: number = arr.indexOf(emptyBtn)
    
    arr[chosenPuzzleIndex] = emptyBtn;
    arr[emptyPuzzleIndex] = btn;

    animatedReplace(btn, emptyBtn);
    setTimeout(() => updatePuzzleContainer(arr), 200);

    return arr;
}


export default replacePuzzles;