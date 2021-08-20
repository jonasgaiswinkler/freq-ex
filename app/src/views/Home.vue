<template>
  <div style="height: 100%, width: 100%; position: relative"></div>
  <l-map :zoom="5" :center="[47.41322, 15]" :zoomAnimation="true" class="map">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
  /></l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "Home",
  components: {
    LMap,
    LTileLayer,
  },
};
</script>

<style scoped>
.map {
  position: absolute;
  inset: 0;
}
</style>
