import { imagesArray } from "../../universal/selectors";
import ImageInterface from "../image/image_interface";

const addToImagesArray = (arr: ImageInterface[]) : ImageInterface[] => {
    imagesArray.push(...arr.map(image => image));
    return imagesArray;
}

export default addToImagesArray;