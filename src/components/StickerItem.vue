<template>
  <div class="sticker-container">
    <div class="sticker__icon">
      <p class="sticker__text">{{ formatDate }}</p>
    </div>

    <div class="sticker">
      <div class="sticker__username">
        <p class="sticker__username-text" :class="{ 'u-font-sm': smallFont }">
          {{ formatUsername }}
        </p>
      </div>
      <div class="sticker__username" v-if="formatUsername">
        <p class="sticker__username-text purple">&</p>
      </div>
      <div class="sticker__username">
        <p class="sticker__username-text">{{ parseTodo.partnername }}</p>
      </div>
      <div class="sticker__sentence" v-if="parseTodo.partnername">
        ARE GOING TO
      </div>
    </div>

    <ul class="todo">
      <li class="todo__item" v-for="todo in parseTodo.list" :key="todo">
        <i class="fas fa-check-circle green"></i>{{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StickerItem",
  props: {
    todo: {
      type: Object,
    },
  },
  data() {
    return {
      parseTodo: JSON.parse(JSON.stringify(this.todo)),
      smallFont: false,
      date: new Date(),
    };
  },
  computed: {
    formatUsername: {
      get() {
        if (!this.parseTodo.username) return "";

        return (
          this.parseTodo.username.slice(0, 1).toUpperCase() +
          this.parseTodo.username.slice(1)
        );
      },
      set(val) {
        this.parseTodo.username = val;
      },
    },
    formatDate() {
      const [week, month, day] = ("" + this.date).split(" ");
      return week + " " + month + " " + day;
    },
  },
  watch: {
    parseTodo: {
      handler(newVal) {
        newVal.username.length > 5
          ? (this.smallFont = true)
          : (this.smallFont = false);

        if (newVal.username.length > 10)
          newVal.username = newVal.username.slice(0, 10);
      },
      deep: true,
    },
    todo: {
      handler(newVal) {
        this.parseTodo = JSON.parse(JSON.stringify(newVal));
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.sticker {
  &-container {
    width: 20rem;
    height: 25rem;
    padding: 2rem 0;
    background: var(--white);
    box-shadow: -7px 12px 16px 0px var(--box-shadow);
  }

  &__username {
    margin: 0.5rem 0;

    &-text {
      font-size: 2.5rem;
      font-weight: bolder;
      text-align: center;
      background: linear-gradient(
        to right bottom,
        rgb(244, 192, 115),
        rgb(205, 77, 113)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__sentence {
    font-size: 1.25rem;
    margin: 2rem 0;
    color: var(--color-secondary);
    text-align: center;
  }
}

.todo {
  padding: 0 2rem;
  height: 180px;
  display: flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  &__item {
    padding: 0.5rem;
  }

  i {
    color: rgb(124, 231, 118);
    margin-right: 0.35rem;
  }
}
</style>
