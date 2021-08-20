const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const { load } = require("./lib/loader");

exports.calcStationFrequency = functions.https.onCall(
  ({ networkId }, context) => {
    return load(networkId);
  }
);
