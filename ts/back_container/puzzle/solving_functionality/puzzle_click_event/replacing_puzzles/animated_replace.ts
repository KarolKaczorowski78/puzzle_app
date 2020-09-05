// imports

const animatedReplace = (puzzle: HTMLButtonElement, emptyPuzzle: HTMLButtonElement) => {
    const offsetLeftDifference = puzzle.offsetLeft - emptyPuzzle.offsetLeft;
    const offsetTopDifference = puzzle.offsetTop - emptyPuzzle.offsetTop;

    puzzle.style.transform = `translateX(${-offsetLeftDifference}px) translateY(${-offsetTopDifference}px)`;
    emptyPuzzle.style.transform = `translateX(${offsetLeftDifference}px) translateY(${offsetTopDifference}px)`;

    setTimeout(() => puzzle.style.transform = emptyPuzzle.style.transform = 'none', 200);
}

export default animatedReplace;