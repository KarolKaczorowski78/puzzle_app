import TimerInterface from './timer_interface';
import { timerMinutesContainer, timerSecondsContainer } from '../../../universal/selectors';

const Timer : TimerInterface = {
    minutes: 0,
    seconds: 0,
    interval: undefined,
    isRunning: false,

    get start() {
        return () => {
            this.interval = setInterval(() => {
                this.isRunning = true;
                this.seconds++;
                if (this.seconds === 60) {
                    this.minutes++;
                    this.seconds = 0;
                }

                this.updateDOM();

            }, 1000);
        }
    },

    get stop() {
        return () => {
            this.isRunning = false;
            clearInterval(this.interval);
        }
    },

    get reset() {
        return () => {
            this.minutes = this.seconds = 0;
            this.updateDOM();
        }
    },

    get updateDOM() {
        return () => {
            timerMinutesContainer.textContent = this.minutes < 10 ? `0${this.minutes}` : this.minutes; 
            timerSecondsContainer.textContent = this.seconds < 10 ? `0${this.seconds}` : this.seconds; 
        }
    }
}

export default Timer;