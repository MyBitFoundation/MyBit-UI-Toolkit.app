export const getStringFromDate = (deadline) => {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return deadline.toLocaleDateString('en-EN', options);
};

export const getRemainingTime = (deadline) => {
  const nowTimestamp = Date.parse(new Date());
  const deadlineTimestamp = Date.parse(deadline);
  // get total seconds between the times for further calculation
  let totalSeconds = Math.abs(deadlineTimestamp - nowTimestamp) / 1000;
  // get whole days and subtract from total_seconds
  const days = Math.floor(totalSeconds / 86400);
  totalSeconds -= days * 86400;
  // get whole hours
  const hours = Math.floor(totalSeconds / 3600) % 24;
  return `${days} days and ${hours} hours to go`;
};
