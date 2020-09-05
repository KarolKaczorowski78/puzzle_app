import navApp from './navigation/nav_app';
import imagesContainerApp from './images_container/images_container_app';
import headerApp from './header/header_app';

const frontContainerApp = () => {
    imagesContainerApp();
    navApp();
    headerApp();
}

export default frontContainerApp;