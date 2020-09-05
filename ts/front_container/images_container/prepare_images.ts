import PuzzleImage from '../image/image';
import PuzzleInterface from '../image/image_interface';

const prepareImages = (data: JSON) : PuzzleInterface[] => 
    Object.values(data).map(({id, name, category}) => {
        const imgUrl : string = `./img/${id}.jpg`;
        
        return new PuzzleImage(name, imgUrl, category);
      })
;

export default prepareImages;