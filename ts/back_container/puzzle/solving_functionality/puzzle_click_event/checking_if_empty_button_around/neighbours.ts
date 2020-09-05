
const getNeighbours = (puzzlesInRow: number): number[] => 
    [
        -1, 1, -puzzlesInRow, puzzlesInRow,
        -(puzzlesInRow + 1), puzzlesInRow + 1,
        -(puzzlesInRow - 1), puzzlesInRow - 1
    ];


export default getNeighbours;