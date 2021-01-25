function getEventWeekday(daysToEvent) {
    let dayOfWeek = (new Date).getDay();
    let remainder = daysToEvent % 6;
    let dayIndex = dayOfWeek + remainder;
    let dayNames = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];
    return dayNames[dayIndex];
}

console.log(getEventWeekday(0));
console.log(getEventWeekday(1));
console.log(getEventWeekday(2));
console.log(getEventWeekday(3));
console.log(getEventWeekday(4));
console.log(getEventWeekday(5));
console.log(getEventWeekday(6));
console.log(getEventWeekday(7));
console.log(getEventWeekday(8));
