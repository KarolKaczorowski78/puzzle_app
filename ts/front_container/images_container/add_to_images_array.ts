import { imagesArray } from "../../universal/selectors";
import ImageInterface from "../image/image_interface";

const addToImagesArray = (arr: ImageInterface[]) : ImageInterface[] => {
    arr.forEach((image: ImageInterface) => imagesArray.push(image));
    
    return imagesArray;
}

export default addToImagesArray;