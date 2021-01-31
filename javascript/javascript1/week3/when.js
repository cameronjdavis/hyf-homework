function calculateTravelTime(travelInformation) {
  const decimal = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(decimal);
  const minutes = Math.round((decimal - hours) * 60);
  return hours + " and " + minutes + " minutes";
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
