const admin = require("firebase-admin");
const bucket = admin.storage().bucket();

const parse = require("csv-parse/lib/sync");

exports.load = async function (networkId) {
  const stops = await loadStops(networkId);
  const trips = await loadTrips(networkId);
  const stopTimes = await loadStopTimes(networkId);
  const calendar = await loadCalendar(networkId);
  const calendarDates = await loadCalendarDates(networkId);
  return {
    stops,
    trips,
    stopTimes,
    calendar,
    calendarDates,
  };
};

function loadStops(networkId) {
  return loadFile(networkId, "stops");
}

function loadTrips(networkId) {
  return loadFile(networkId, "trips");
}

function loadStopTimes(networkId) {
  return loadFile(networkId, "stop_times");
}

function loadCalendar(networkId) {
  return loadFile(networkId, "calendar");
}

function loadCalendarDates(networkId) {
  return loadFile(networkId, "calendar_dates");
}

async function loadFile(networkId, fileName) {
  const file = (
    await bucket.file(`networks/${networkId}/${fileName}.txt`).download()
  )[0];
  return parse(file, {
    delimiter: ",",
    columns: true,
  });
}
