import { quitPuzzleButton } from '../universal/selectors';
import toggleContainersVisibility from '../universal/toggle_containers_visibility';

const backContainerApp = () => {
    quitPuzzleButton.addEventListener('click', toggleContainersVisibility);
}

export default backContainerApp;