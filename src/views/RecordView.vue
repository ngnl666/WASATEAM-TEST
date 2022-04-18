<template>
  <div class="record__container">
    <StickerItem
      class="record__item"
      v-for="(todo, i) in todos"
      :key="i"
      :todo="todo"
      @click="getTodo(todo.id)"
    />
  </div>
</template>
<script>
export default {
  name: "RecordView",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getTodo(id) {
      this.$router.push({ path: `/record/${id}` });
    },
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("myTodo"));
  },
};
</script>

<style scoped lang="scss">
.record {
  &__container {
    padding: 0 5rem;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    margin: 1rem 1rem;
  }
}
</style>
