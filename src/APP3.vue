<template>
<div>
  <!-- <router-link to="/todo-list">Todo List</router-link> -->
  {{''}}
  <router-link to="/counter">Counter</router-link>
  
  <!-- <router-link to="/area-select">TodoList</router-link> -->
  <router-link to="/counter">AreaSelect</router-link>
  <router-link to="/currency">Currency</router-link>
  <router-link to="/user">Users</router-link>
  {{count}}



<div>
  <router-view>
</div>
  



</div>
  
</template>

<script>
import TodoList1 from "./TodoList1.vue";
export default{
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
  
}
</script>

<style>

</style>