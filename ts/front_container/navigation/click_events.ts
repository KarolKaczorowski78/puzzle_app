import toggleNavVisibility from './toggle_nav_visibility';
import { seeNavButton } from '../../universal/selectors';

const clickEventsFunctionality = () : void => {
    seeNavButton.addEventListener('click', toggleNavVisibility);
}

export default clickEventsFunctionality;