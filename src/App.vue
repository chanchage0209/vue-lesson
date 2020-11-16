<template>
<div>
  <AreaSelect :zipcode="zipcode" />
  <hr/>
  <AreaSelect @input="onInput"/>
</div>
  
</template>

<script>
import AreaSelect from "./AreaSelect.vue";
import zipcode from "./zipcode.json";
export default{
  components:{AreaSelect},
  data:()=>({
    zipcode,
    regionCode:0,
  }),
  methods:{
    onInput(val){
      this.regionCode=val;
    }
  }
}
</script>

<style>

</style>