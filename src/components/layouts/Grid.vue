<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-gap: 20px;
}
@supports (width: min(320px, 100%)) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  }
}
</style>
