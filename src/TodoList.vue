<template>
  <div>
    <input v-model="text" ref="ipt"/>

    <button @click="addTodo">Submit</button>

    <ul>
      <li v-for="item in list" :key="item.id" @click="toggleDone(item)">
        <input type="checkbox" v-model="item.done" />
        {{ item.text }}
        <button @click="deleteItem(item)">delete</button>
      </li>
    </ul>

    <pre>{{ JSON.stringify(list, null, 2) }}</pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "",
    list: [],
  }),
  methods: {
    deleteItem(item) {
      const idx = this.list.indexOf(item);
      this.list.splice(idx, 1);
    },
    toggleDone(item) {
      item.done = !item.done;
    },
    addTodo() {
      if (this.text === "") return;

      const item = {
        id: Date.now(),
        text: this.text,
        done: false,
      };

      this.list.push(item);
      this.text = "";
    },
  },
  mounted() {
    this.$refs.ipt.focus()
  },
};
</script>