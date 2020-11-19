<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="add">Add {{ step }}</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    step: 1,
  }),
  methods: {
    add() {
      this.count += this.step;
      this.step += 1;
    },
  },
  watch: {
    count(val) {
      if (val === 10) {
        this.$router.push("/todo-list");
      }
    },
  },
};
</script>