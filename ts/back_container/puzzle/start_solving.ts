import cutImage from './preparing_image/cut_image';
import addPuzzlesRandomlyToContainer from './preparing_image/add_puzzles';
import toggleContainersVisibility from '../../universal/toggle_containers_visibility';
import Timer from '../measurers/timer/timer';
import solvingApp from './solving_functionality/solving_app';
import seeSolutionApp from './solving_functionality/viewing_solution/see_solution_app';
import adjustSizes from './preparing_image/adjust_sizes';

interface SolvePuzzleInterface {
    (img: HTMLImageElement, ammountOfPuzzles: number) : void;
}

const solvePuzzle : SolvePuzzleInterface = (img: HTMLImageElement, ammountOfPuzzles: number) : void => {
    const ammountOfPuzzlesInOneRow = Math.sqrt(ammountOfPuzzles);

    const solvingArrangementOfPuzzles = cutImage(img, ammountOfPuzzles)
    const currentArrangementOfPuzzles = addPuzzlesRandomlyToContainer(solvingArrangementOfPuzzles);

    window.addEventListener('resize', () => adjustSizes(ammountOfPuzzlesInOneRow));

    adjustSizes(ammountOfPuzzlesInOneRow);
    seeSolutionApp(solvingArrangementOfPuzzles, currentArrangementOfPuzzles);
    toggleContainersVisibility();
    solvingApp(currentArrangementOfPuzzles, solvingArrangementOfPuzzles, ammountOfPuzzlesInOneRow);

    Timer.start();
}

export default solvePuzzle;