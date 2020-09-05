import getNeighbours from './neighbours';
import getEdges from './edges';

const isEmptyPuzzleAround = (puzzle: HTMLButtonElement, currArr:HTMLButtonElement[], puzzlesInRow: number): boolean => {
    const puzzleIndex = currArr.indexOf(puzzle);
    const neigbhoursToDelete = isPuzzleInRightOrLeftEdge(puzzleIndex, puzzlesInRow);
    let neigbhoursValues: number[] = getNeighbours(puzzlesInRow);

    neigbhoursValues = deleteNeigbhoursIfOnEdge(neigbhoursValues, neigbhoursToDelete);

    const result: number | undefined = neigbhoursValues.find(number => {
        let currentlyCheckedPuzzle = currArr[puzzleIndex + number];
        const isButton = currentlyCheckedPuzzle instanceof HTMLButtonElement;

        return isButton && currentlyCheckedPuzzle.title === 'empty';
    });
    
    const valToReturn: boolean = typeof result === 'number';

    return valToReturn;
}


const isPuzzleInRightOrLeftEdge = (puzzleIndex: number, puzzlesInRow: number): boolean | number[] => {

    const result: undefined | number[] = getEdges(puzzlesInRow)
                .filter(({ values }) => values.includes(puzzleIndex))
                .map(({ toDelete }) => toDelete)[0]

    const returnedValue = result === undefined ? false : result;

    return returnedValue;
}


const deleteNeigbhoursIfOnEdge = (arrNeigh: number[], toDelete: number[] | boolean): number[] => 
typeof toDelete !== 'boolean' ? arrNeigh.filter(number => !toDelete.includes(number)) : arrNeigh


export default isEmptyPuzzleAround;