export const getStringFromDate = (deadline) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return deadline.toLocaleDateString('en-EN', options)
}

export const getRemainingTime = (deadline) => {
    const now_timestamp = Date.parse(new Date());
    const deadline_timestamp = Date.parse(deadline);
    // get total seconds between the times for further calculation
    var total_seconds = Math.abs(deadline_timestamp - now_timestamp) / 1000;
    // get whole days and subtract from total_seconds
    var days = Math.floor(total_seconds / 86400);
    total_seconds -= days * 86400;
    // get whole hours
    var hours = Math.floor(total_seconds / 3600) % 24;
    return `${days} days and ${hours} hours to go`
}