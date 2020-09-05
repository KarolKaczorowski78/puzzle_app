import frontContainerApp from './front_container/front_container_app';
import backContainerApp from './back_container/back_container_app';
import difficultyPickerApp from './difficulty_picker/difficulty_picker_app';

const app = () => {
    frontContainerApp();
    backContainerApp();
    difficultyPickerApp();
}

export default app;