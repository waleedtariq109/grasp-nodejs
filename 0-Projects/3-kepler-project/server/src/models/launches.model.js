const launches = new Map();

let latestFlightNumber = 100;

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

function isLaunchExists(id) {
  return launches.has(id);
}

function abortLaunch(id) {
  const abortedLaunch = launches.get(id);
  launches.set(id, {
    ...abortedLaunch,
    upcoming: false,
    success: false,
  });

  return abortedLaunch;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  abortLaunch,
  isLaunchExists,
};
