<template>
  <div>
    <input v-model="text" />
    <!-- <button @click="addTodo">Submit</button> -->
    <button@click="addTodo">submit </button>

    <ul>
      <li v-for="item in list" :key="item.id">
        <input type="checkbox" v-model="item.click"/>
        {{ item.text }}
        <button @click="deleteItem">delete</button>

      </li>
    </ul>

    <pre>{{JSON.stringify(list,null,2)}}</pre>
  </div>
</template>

<script>
export default {
  data :()=>({
    text : "",
    item:"",
  }),
  methods:{
    deleteItem(){
      const idx=this.list.indexof(item)
      this.list.splice(idx,1)
      
      this.list.splice(idx,1)
    },
    toggleDone(){
      item.done=!item.done
    },
    addTodo(){
      if(this.text ==="")return;
      const item={
        id: Date.now(),
        text:this.text,
        done:false,
      };
     this.list.push(this.text)
     this.text="";
    }
  }
  

}
</script>

<style>
</style>