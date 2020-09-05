import isTouchDevice from './detect_touch_device';

const adaptEvents = (): string[] => {
    const events = isTouchDevice() ? ['touchstart', 'touchend'] : ['mouseover', 'mouseout']
    
    return events
}

export default adaptEvents;