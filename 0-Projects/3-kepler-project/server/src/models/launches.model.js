const launches = new Map();

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

module.exports = { getAllLaunches };
