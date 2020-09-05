interface ImageInterface {
    name: string;
    imgPath: string;
    category: string;
    container: HTMLButtonElement;
    load(): void;
    solvePuzzleWithThisImage(img: HTMLImageElement): void;
}

export default ImageInterface;