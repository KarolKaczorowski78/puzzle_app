// imports

const isCurrentArrangementCorrect = (currArr: HTMLButtonElement[], solvingArr: HTMLButtonElement[]): boolean => {
    return currArr.every((puzzle, i) => {
        return puzzle === solvingArr[i]
    });
}

export default isCurrentArrangementCorrect;