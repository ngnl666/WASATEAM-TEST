<template>
  <main class="todo__container">
    <div class="button-group">
      <span @click="changeStep(0)" v-if="step"
        ><i class="fas fa-arrow-alt-circle-left"></i
      ></span>
      <span @click="changeStep(1)" v-if="showNextStep"
        ><i class="fas fa-arrow-alt-circle-right"></i
      ></span>
      <span @click="saveTodo()" v-if="todo.list.length"
        ><i class="fas fa-save"></i
      ></span>
    </div>
    <div class="u-flex-between">
      <InputItem v-model:todo="todo" :step="step" />
      <StickerItem :todo="todo" />
    </div>
  </main>
</template>

<script>
export default {
  name: "TodoView",
  data() {
    return {
      todo: {
        username: "",
        partnername: "",
        list: [],
      },
      step: 0,
    };
  },
  computed: {
    showNextStep() {
      let state = true;
      if (this.step === 0)
        this.todo.username ? (state = true) : (state = false);
      if (this.step === 1)
        this.todo.partnername ? (state = true) : (state = false);
      if (this.step === 2) state = false;

      return state;
    },
  },
  methods: {
    changeStep(status) {
      status ? this.step++ : this.step--;
    },
    saveTodo() {
      const vm = this;
      let myTodo = JSON.parse(localStorage.getItem("myTodo")) || [];

      myTodo.push({ ...this.todo, id: new Date() });
      localStorage.setItem("myTodo", JSON.stringify(myTodo));
      this.todo = { username: "", partnername: "", list: [] };
      setTimeout(() => vm.$router.push({ path: "/record-view" }), 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.todo__container {
  width: 50rem;
  padding: 2rem 3.5rem;
  margin: 0 auto;
  background: var(--color-primary);
}

.button-group {
  margin: 0 auto;

  & > span {
    font-size: 2rem;
    color: var(--blue);
    padding: 0 0.5rem;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
}
</style>
