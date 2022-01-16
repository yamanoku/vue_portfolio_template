<template>
  <div class="cover">
    <slot />
  </div>
</template>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  min-block-size: 100vh;
}
.cover > :first-child {
  margin-top: 0;
}
.cover > :last-child {
  margin-bottom: 0;
}
</style>
