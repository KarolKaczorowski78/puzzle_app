import { frontContainer, timerMinutesContainer } from './selectors';
import MovesCounter from '../back_container/measurers/moves_counter/moves_counter';
import Timer from '../back_container/measurers/timer/timer';

const toggleContainersVisibility = () : void => { 
    if (frontContainer.classList.length === 3) {
        MovesCounter.reset();
        Timer.stop();
        Timer.reset();
    }
    frontContainer.classList.toggle('hidden-front-face');
}

export default toggleContainersVisibility;