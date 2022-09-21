"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converteHourStringToMinutes = void 0;
function converteHourStringToMinutes(hourString) {
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
}
exports.converteHourStringToMinutes = converteHourStringToMinutes;
