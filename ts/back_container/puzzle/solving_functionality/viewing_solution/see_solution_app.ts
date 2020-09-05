import { seeSolutionButton } from '../../../../universal/selectors';
import adaptEvents from './adapt_events_to_device';
import updatePuzzleContainer from '../puzzle_click_event/update_puzzle_container';
import Timer from '../../../measurers/timer/timer';

const seeSolutionApp = (solvingArr: HTMLButtonElement[], currentArr: HTMLButtonElement[]): void => {
    const [onEvent, outEvent] = adaptEvents();

    seeSolutionButton.addEventListener(onEvent, toggleSolutionVisibility(solvingArr));
    seeSolutionButton.addEventListener(outEvent, toggleSolutionVisibility(currentArr));

}

const toggleSolutionVisibility = (arr: HTMLButtonElement[]) => (): void => 
    Timer.isRunning && updatePuzzleContainer(arr);


export default seeSolutionApp;