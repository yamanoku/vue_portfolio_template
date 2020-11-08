<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import 'normalize.css'
export default {
  name: 'App'
}
</script>

<style lang="scss">
html {
  height: 100%;
  font-size: 62.5%;
}
body {
  font-family: 'Noto Sans JP', HiraKakuProN-W3, Meiryo, sans-serif;
  font-size: 1.6rem;
  height: 100%;
  position: relative;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: 100%;
}
*,*:before,*:after {
  box-sizing: border-box;
}
.fade {
  &-enter-active {
    transition: transform .875s ease-out;
  }
  &-leave-active {
    transition: transform .875s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
}
@media screen and (min-width: 769px) {
  .fade-enter-from, .fade-leave-to {
    transform: translateY(100vh);
    &.main {
      transform: translateY(-100vh);
    }
  }
}
@media screen and (max-width: 768px) {
  .fade-enter-from, .fade-leave-to {
    transform: translateX(-200vw);
    &.main {
      transform: translateX(250vw);
    }
  }
}
</style>
