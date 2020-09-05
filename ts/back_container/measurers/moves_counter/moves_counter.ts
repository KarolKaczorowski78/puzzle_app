import MovesInterface from './moves_interface';
import { movesContainer } from '../../../universal/selectors';

const MovesCounter : MovesInterface = {
    movesAmmount: 0,
    isCounting: false,

    get reset() {
        return () => {
            this.movesAmmount = 0;
            this.updateDOM();
        }
    },

    get updateDOM() {
        return () => {
            movesContainer.textContent = this.movesAmmount;
        }
    },

    get increaseMoves() {
        return () => {
            this.movesAmmount++;
            this.updateDOM();
        }
    }
}

export default MovesCounter;