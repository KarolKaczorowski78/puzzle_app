
const cutImage = (image: HTMLImageElement, puzzlesCount: number) : HTMLButtonElement[] => {

    const puzzlesArray: HTMLButtonElement[] = [];
    const ammounfOfPuzzlesInOneRow: number = Math.sqrt(puzzlesCount);
    const puzzleContainerViewportWidth: number = 80;
    const puzzleContainerViewportHeight: number = 60;

    const imagePartWidth: number = image.naturalWidth / ammounfOfPuzzlesInOneRow;
    const imagePartHeight: number = image.naturalHeight / ammounfOfPuzzlesInOneRow;

    let xAxis: number, yAxis: number;
    xAxis = yAxis = 0;

    for (let i: number = 0; i < puzzlesCount; i++) {

        const canvas: HTMLCanvasElement = document.createElement('canvas');
        const puzzle: HTMLButtonElement = document.createElement('button');
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

        [canvas.width, canvas.height] = [imagePartWidth, imagePartHeight];

        ctx.drawImage(image, xAxis, yAxis, imagePartWidth, imagePartHeight, 0, 0, 
            imagePartWidth, imagePartHeight);

        if (xAxis === (ammounfOfPuzzlesInOneRow - 1) * imagePartWidth) {
            xAxis = 0;
            yAxis += imagePartHeight;
        } else { xAxis += imagePartWidth }

        puzzle.appendChild(canvas);

        puzzle.className = 'puzzle';
        puzzlesArray.push(puzzle);   
        
        canvas.style.maxWidth = `${puzzleContainerViewportWidth / ammounfOfPuzzlesInOneRow}vw`;
        canvas.style.maxHeight = `${puzzleContainerViewportHeight / ammounfOfPuzzlesInOneRow}vh`;

    }

    const emptyPuzzle: HTMLButtonElement = puzzlesArray[puzzlesArray.length - 1];

    emptyPuzzle.querySelector('canvas').style.visibility = 'hidden';
    emptyPuzzle.title = 'empty';

    return puzzlesArray;
}

export default cutImage;