<template>
  <div>
    <input type="checkbox" name="darkmode" id="darkmode" v-model="darkmode" />
    <label>darkmode: {{ darkmode }}</label>
  </div>
  <div class="u-flex-center u-mb-medium">
    <NavItem />
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      darkmode: false,
    };
  },
  watch: {
    darkmode(val) {
      val
        ? document.documentElement.setAttribute("data-theme", "dark")
        : document.documentElement.setAttribute("data-theme", "");
    },
  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
