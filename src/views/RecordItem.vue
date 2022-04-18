<template>
  <div class="u-flex-center"><StickerItem :todo="todo" /></div>
</template>
<script>
export default {
  name: "RecordItem",
  data() {
    return {
      todo: {},
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.todo = JSON.parse(localStorage.getItem("myTodo")).find(
      (item) => item.id === id
    );
  },
};
</script>
<style lang=""></style>
