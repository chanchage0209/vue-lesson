<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count += 1">ADD</button>
    <h2 v-if="count % 2 === 0">even</h2>

    <ol>
      <li v-for="text in list" :key="text">
        {{ text }}
      </li>
    </ol>

    <input v-model="username" />
    <h2>{{ username }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      list: ["Lern JS", "Learn Vue", "$Profit$"],
      username: "",
    };
  },
};
</script>

<style>
div {
  color: black;
}
</style>