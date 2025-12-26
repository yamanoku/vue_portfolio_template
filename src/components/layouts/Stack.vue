<template>
  <div class="stack">
    <slot />
  </div>
</template>

<style>
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.stack > * {
  margin-block: 0;
}
.stack > * + * {
  margin-block-start: var(--space, 1.5rem);
}
</style>

<script setup vapor></script>