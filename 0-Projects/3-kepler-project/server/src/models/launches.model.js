const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exp X",
  rocket: "Explore IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "kepler-422 b",
  customers: ["Nasa", "SpaceX"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["Nasa", "SpaceX"],
      upcoming: true,
      success: false,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
