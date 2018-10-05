import dayjs from 'dayjs';

const getTimeAgo = (time) => {
  const creationTime = dayjs(time);
  const now = dayjs(new Date().getTime());

  const miliseconds = now.diff(creationTime);

  const hours = miliseconds / 3600000;
  let toReturn = '';
  if (hours < 0.5) {
    toReturn = 'past 30 minutes';
  } else if (hours < 1) {
    toReturn = 'past hour';
  } else if (hours < 24) {
    const hoursAux = hours.toFixed(0);
    const hoursText = hoursAux === 1 ? 'hour' : 'hours';
    toReturn = `${hoursAux} ${hoursText} ago`;
  } else if (hours < 24 * 31) {
    const days = hours / 24;
    const daysAux = days.toFixed(0);
    const daysText = daysAux === 1 ? 'day' : 'days';
    toReturn = `${daysAux} ${daysText} ago`;
  } else if (hours < 24 * 31 * 5) {
    const months = hours / (24 * 31);
    const monthsAux = months.toFixed(0);
    const monthsText = monthsAux === 1 ? 'month' : 'months';
    toReturn = `${monthsAux} ${monthsText} ago`;
  } else if (hours < 24 * 31 * 12) {
    toReturn = 'Over 6 months ago';
  } else {
    toReturn = dayjs(time).format('YYYY-MM-DD');
  }

  return toReturn;
};

export default getTimeAgo;
