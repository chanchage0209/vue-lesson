<template>
  <div :class="{list:true,red:active}">
    Hello 
    <button @click="active=!active">toggle</button>
    <h3 :style="{background:active?'green':'red'}">
      world
    </h3>
    <input :value="text" @input="(e)=>(text=e.target.value)"/>
    <input v-model="text"/>
  </div>
</template>

<script>
export default {
  data:() =>({
    name:"scars",
    active:false,
    text: "",
  }),
  
}
</script>

<style>
.list{
  color:red;
};
.list .red{
  color:green;
} 
</style>