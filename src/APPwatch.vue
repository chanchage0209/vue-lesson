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
        
  },
  watch:{
    if(count_%10===0){
      
    }
  }
};
</script>

<style>
</style>