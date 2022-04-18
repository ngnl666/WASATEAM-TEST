<template>
  <div class="input u-flex-center">
    <!-- text -->
    <div class="input__textGroup" v-show="step === 0">
      <label for="username" class="input__label">Enter Your Name</label>
      <input
        type="text"
        id="username"
        class="input__space"
        autocomplete="off"
        :todo="todo"
        @input="updateTodo('text', $event.target.value)"
      />
    </div>
    <!-- radio -->
    <div class="input__radioGroup" v-show="step === 1">
      <label class="input__label">Choose Your Partner</label>
      <div class="input__box" v-for="p in partnerList" :key="p.city">
        <input
          type="radio"
          :id="p.name"
          name="partnername"
          :value="p.name"
          :todo="todo"
          @input="updateTodo('radio', $event.target.value)"
        />
        <label class="input__radio-label" :for="p.name">{{ p.name }}</label>
      </div>
    </div>
    <!-- select -->
    <div class="input__selectGroup" v-show="step === 2">
      <label class="input__label">Select Your List</label>
      <div>
        <select
          multiple
          :todo="todo"
          @input="updateTodo('select', $event.target.selectedOptions)"
        >
          <option v-for="t in todoList" :key="t.id" :value="t.title">
            {{ t.title }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputItem",
  props: {
    todo: {
      type: Object,
    },
    step: {
      type: Number,
      validator: (value) => value >= 0,
    },
  },
  data() {
    return {
      tempTodo: { ...this.todo },
      partnerList: [],
      todoList: [],
    };
  },
  methods: {
    updateTodo(type, val) {
      if (type === "text") this.tempTodo.username = val;
      if (type === "radio") this.tempTodo.partnername = val;
      if (type === "select")
        this.tempTodo.list = Array.from(val).map((v) => v._value);

      this.$emit("update:todo", this.tempTodo);
    },
  },
  async created() {
    const res = await Promise.allSettled([
      fetch("https://mocki.io/v1/cb950daa-b063-4e8c-bc56-e1d0a900c2bb").then(
        (res) => res.json()
      ),
      fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then(
        (res) => res.json()
      ),
    ]);

    this.todoList = res[0].value;
    this.partnerList = res[1].value;
  },
};
</script>

<style scoped lang="scss">
.input {
  width: 22.5rem;
  padding: 0 1rem;
  flex-direction: column;

  &__space {
    font-size: 1.35rem;
    border-radius: 7.5px;
    border: 1px solid var(--color-secondary);
    padding: 0.5rem;
    &:focus {
      border-color: var(--blue);
    }
  }

  &__radio-label {
    color: var(--radio-label-color);
  }
}
</style>
