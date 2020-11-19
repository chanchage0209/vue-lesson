<template>
  <div>
    <div>
      You're suspended!!

      <button v-if="!show" @click="show=true">
        More
      </button>
      <button v-else @click="show=false">
        Hide
      </button>



    </div>

    <div v-show="show">
      asdf;kjweqpriuewrnad,f.mvnzxvhfheiwhfw
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>