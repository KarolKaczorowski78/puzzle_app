import { navigation } from '../../universal/selectors';

const toggleNavVisibility = () : void => { navigation.classList.toggle('front-face--nav__shown') };

export default toggleNavVisibility;