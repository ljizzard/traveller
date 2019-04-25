const Traveller = function(journeys) {
  this.journeys = journeys;
};


Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
        return  journey.startLocation;
  });
       return result;


Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
    return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.find((journey) => {
    return journey.transport;
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const total = this.journeys.filter((journey) =>{
    return journey.distance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
};
