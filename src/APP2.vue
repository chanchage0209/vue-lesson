<template>
  <!-- <TodoList/> -->
  <div>
    <h2>{{ countDouble }}</h2>
    <button @click="countDouble += 1"></button>
  </div>
</template>

<script>
// import TodoList from "./TodoList";


export default {
  // components: { TodoList },
  data:()=>({
    count_:0,
  }),
  computed:{
    countDouble:{
      get(){
        return this.count*2
      },
      set(value){
        this.count_=value
      },
    }
  }
};
</script>

<style>
</style>