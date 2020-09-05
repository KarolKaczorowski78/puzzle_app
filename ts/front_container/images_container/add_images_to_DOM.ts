import ImageInterface from '../image/image_interface';

const addImagesToTheDOM = (arr: ImageInterface[]) : void => {
        arr.forEach(image => image.load());
    };

export default addImagesToTheDOM;