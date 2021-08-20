import { getFunctions, httpsCallable } from "firebase/functions";

export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    async loadStops() {
      const functions = getFunctions();
      const result = await httpsCallable(
        functions,
        "calcStationFrequency"
      )({
        networkId: "XojRJYGY0uesIKmDY7uA",
      });
      console.log(result);
    },
  },
  getters: {},
};
