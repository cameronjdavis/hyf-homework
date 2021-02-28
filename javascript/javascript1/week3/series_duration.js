const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText(seriesDurations) {
  const minutesInLife = 80 * 365 * 24 * 60;
  let minutesTotalWatched = 0;
  for(duration of seriesDurations) {
    const minutesWatching = 100 * (duration.days * 24 * 60) + (duration.hours * 60) + duration.minutes;
    const percentage = Math.round(1000 * minutesWatching / minutesInLife) / 1000;
    minutesTotalWatched += minutesWatching;
    console.log(`${duration.title} took ${percentage}% of my life`);
  }

  const percentageTotal = Math.round((minutesTotalWatched / minutesInLife) * 1000) / 1000;
  console.log(`In total that is ${percentageTotal}% of my life`);
}

logOutSeriesText(seriesDurations); // logs out the text found above
