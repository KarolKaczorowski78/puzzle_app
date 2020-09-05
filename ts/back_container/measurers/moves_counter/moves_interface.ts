import MeasurerInterface from "../measurer_interface";

interface MovesInterface extends MeasurerInterface {
    reset(): void;
    increaseMoves(): void;
    isCounting: boolean;
    movesAmmount: number;
}

export default MovesInterface;