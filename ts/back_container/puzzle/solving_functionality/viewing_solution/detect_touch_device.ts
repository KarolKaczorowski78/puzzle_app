// imports

const isTouchDevice = (): boolean => "ontouchstart" in document.documentElement ? true : false;


export default isTouchDevice;