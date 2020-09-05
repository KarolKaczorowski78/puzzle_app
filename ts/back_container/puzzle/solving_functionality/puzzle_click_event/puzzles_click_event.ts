import isEmptyPuzzleAround from './checking_if_empty_button_around/is_empty_puzzle_around';
import replacePuzzles from './replacing_puzzles/replace_puzzles';
import isCurrentArrangementCorrect from './is_current_arrangement_corrrect';
import finishPuzzle from './finish_puzzle';
import MovesCounter from '../../../measurers/moves_counter/moves_counter';

function puzzleClickEvent(currArr: HTMLButtonElement[], solvingArr: HTMLButtonElement[], puzzlesInRow: number) {
    return function() {
        const clickedButton: HTMLButtonElement = this;
        const emptyButton = solvingArr[solvingArr.length - 1];

        if (isEmptyPuzzleAround(clickedButton, currArr, puzzlesInRow)) {
            MovesCounter.increaseMoves();

            replacePuzzles(clickedButton, emptyButton, currArr);
            
            isCurrentArrangementCorrect(currArr, solvingArr) && finishPuzzle();
        } else {
            return;
        }
    }
}

export default puzzleClickEvent;