import puzzleClickEvent from './puzzle_click_event/puzzles_click_event'

const solvingApp = (currArr: HTMLButtonElement[], solvingArr: HTMLButtonElement[], puzzlesInRow: number) => {
    currArr.forEach(puzzle => puzzle.addEventListener('click', puzzleClickEvent(currArr, solvingArr, puzzlesInRow)))
}

export default solvingApp;