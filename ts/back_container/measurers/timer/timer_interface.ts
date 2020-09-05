import MeasurerInterface from "../measurer_interface";

interface TimerInterface extends MeasurerInterface {
    start() : void;
    reset() : void;
    stop(): void;
    minutes: number;
    seconds: number;
    interval: any;
    isRunning: boolean;
}

export default TimerInterface;