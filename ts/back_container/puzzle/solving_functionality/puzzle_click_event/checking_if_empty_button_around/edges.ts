interface Edge {
    values: number[];       // indexes of puzzles in edge
    toDelete: number[];     // values to delete from checked area if puzzle is on edge
}

// gets left and right edge puzzle column
const getEdges = (puzzlesInRow: number): Edge[] => {
    const rightValues: number[] = [];
    const leftValues: number[] = [];

    const rightStartPoint: number = puzzlesInRow - 1;

    for (let i = 0; i < puzzlesInRow; i++) {
        leftValues.push(i * puzzlesInRow);
        rightValues.push(rightStartPoint + i * puzzlesInRow);
    }

    const leftEdge: Edge = {
        values: [...leftValues],
        toDelete: [-1, -(puzzlesInRow + 1), puzzlesInRow - 1]
    }

    const rightEdge: Edge = {
        values: [...rightValues],
        toDelete: [1, puzzlesInRow + 1, 1 - puzzlesInRow]
    }

    return [leftEdge, rightEdge];
}

export default getEdges;