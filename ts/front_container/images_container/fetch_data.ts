import prepareImages from './prepare_images';
import addToImagesArray from './add_to_images_array';
import addImagesToTheDOM from './add_images_to_DOM';

const fetchData = async (): Promise<void> => {
    const path = require('path');
    const projectRoot = path.dirname(require.main.filename);

    try {
        const data = await fetch(`${projectRoot}/images.json`);
        const jsonData = await data.json();
        const preparedImages = prepareImages(jsonData);
        const imagesInArray = addToImagesArray(preparedImages);
        const imagesAddedToTheDOM = addImagesToTheDOM(imagesInArray);
    }

    catch(err) {
        err && console.log(err);
    }

}

export default fetchData;