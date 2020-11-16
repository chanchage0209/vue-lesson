<template>
  <div>
    <select v-model="cityCode">
      <option v-for="city in cities" :key="city.code" :value="city.code">
        {{ city.name }}
      </option>
    </select>
    {{ cityCode }}

    <select v-model="regionCode">
      <option v-for="region in regions" :key="region.code" :value="region.code">
        {{ region.name }}
      </option>
    </select>
    {{ regionCode }}
  </div>
</template>
<script>
import zipcode from "./zipcode.json";

export default {
  // props:["zipcode"],
  props: {
    zipcode: {
      type: Object,
      default: () => zipcode,
    },
  },
  data: () => ({
    cityCode: 0,
    regionCode: 0,
  }),
  computed: {
    cities() {
      return this.zipcode.cities;
    },
    region() {
      const city = this.cities.find((city) => city.code === this.cityCode);
      // this.cities
      return city ? city.regions : [];
    },
  },
  watch: {
    cities() {
      const [city] = this.cities;
      if (city) {
        this.cityCode = city.code;
      }
      this.cityCode = this.cities[0].code;
    },
    regions: {
      handler() {
        const [region] = this.regions;
        if (region) {
          this.regionCode = region.code;
        }
      },
      immediate:true,
    },
    regionCode(val){
        this.$emit("input",val);
    },
  },
};
</script>