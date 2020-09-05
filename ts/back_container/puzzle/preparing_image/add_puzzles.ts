import updatePuzzleContainer from '../solving_functionality/puzzle_click_event/update_puzzle_container';

const addPuzzlesRandomlyToContainer = (arr: HTMLButtonElement[]) : HTMLButtonElement[] => {
    const currentArrangementOfPuzzles: HTMLButtonElement[] = [];
    const arrCopy = [...arr];

    for (let i = 0; i < arr.length; i++) {

        let randomPuzzleIndex: number;

        // to prevent puzzle to be located in it's correct place
        while (true) {
            randomPuzzleIndex = Math.floor(Math.random() * arrCopy.length);
            if (arrCopy[randomPuzzleIndex] !== arr[i]) { break }
        }

        const randomPuzzle: HTMLButtonElement = arrCopy[randomPuzzleIndex];

        arrCopy.splice(randomPuzzleIndex, 1);

        currentArrangementOfPuzzles.push(randomPuzzle);

    }

    updatePuzzleContainer(currentArrangementOfPuzzles);

    return currentArrangementOfPuzzles;

}

export default addPuzzlesRandomlyToContainer;