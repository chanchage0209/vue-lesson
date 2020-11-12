<template>
  <div>
    <h1>{{ count }}</h1>
    <button v-on:click="count += 1">ADD</button>
    <button @click="count += 1">ADD</button>
    <button @click="add">ADD</button>
    <button @click="add()">ADD{{stp}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 1, stp: 1 };
  },
  /*data:()=>({count:0})  極簡化*/

  methods: {
    add() {
      (this.count += this.stp), (this.stp += 1);
    },
  },
};
</script>

