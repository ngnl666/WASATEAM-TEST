<template>
  <nav>
    <ul class="navigater">
      <li>
        <router-link :to="{ name: 'TodoView' }" class="navigater--link"
          >Todo</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'RecordView' }" class="navigater--link"
          >Record</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavItem",
};
</script>

<style scoped lang="scss">
.navigater {
  display: flex;
  width: 15rem;
  padding: 1rem 2rem;
  background: var(--color-primary-dark);
  justify-content: space-between;
  text-align: center;
  border-radius: 10px;

  &--link {
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    color: #42b983;
  }
}
.router-link-active {
  background: var(--color-secondary-light);
}
</style>
