import { navigation } from '../../universal/selectors';

const toggleNavVisibility = () : void => { navigation.classList.toggle('shown-navigation') };

export default toggleNavVisibility;