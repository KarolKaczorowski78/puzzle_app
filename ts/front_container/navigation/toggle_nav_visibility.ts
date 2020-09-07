import { navigation } from '../../universal/selectors';

const toggleNavVisibility = () : void => { navigation.classList.toggle('front-face__nav--shown') };

export default toggleNavVisibility;