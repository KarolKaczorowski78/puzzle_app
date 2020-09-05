import { imagesContainer } from '../../universal/selectors';
import ImageInterface from './image_interface';
import askForDifficulty from '../../difficulty_picker/ask_for_difficulty';
import DifficultyPicker from '../../difficulty_picker/difficulty_picker_image';

class PuzzleImage implements ImageInterface {
    name: string;
    imgPath: string;
    category: string;
    container: HTMLButtonElement;

    constructor(name : string, imgPath: string, category: string) {
        this.name = name;
        this.imgPath = imgPath;
        this.category = category;
        this.container = document.createElement('button');
    }

    load = () => {
        const img : HTMLImageElement = new Image();

        [img.src, img.alt] = [this.imgPath, `Image of ${this.name}`];
        [this.container.className, img.className] = ["puzzle-image-container", "puzzle-image"];

        this.container.addEventListener('click', this.solvePuzzleWithThisImage(img));

        imagesContainer.appendChild(this.container).appendChild(img);

    }

    solvePuzzleWithThisImage = (img: HTMLImageElement) => () : void => {
        const imgToCut = new Image();

        [imgToCut.src, imgToCut.alt] = [img.src, img.alt];

        imgToCut.addEventListener('load', function() { 
            DifficultyPicker.currentImage = this;
            askForDifficulty();
        })
    };
    
}

export default PuzzleImage;