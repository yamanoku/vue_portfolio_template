<template>
  <div class="imposter">
    <slot />
  </div>
</template>

<style scoped>
.imposter {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
}
</style>
