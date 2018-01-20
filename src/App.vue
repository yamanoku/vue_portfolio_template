<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  border: 0;
  font-size: 100%;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after, q:before, q:after {
  content: none;
  content: "";
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
hr {
  border: 0;
  border-top: 1px solid #ccc;
  display: block;
  height: 1px;
}
img {
  vertical-align: bottom;
}
html {
  height: 100%;
  font-size: 62.5%;
}
body {
  font-family: 'Noto Sans', HiraKakuProN-W3, Meiryo, sans-serif;
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
</style>
<style>
.fade-enter-active {
  transition: all .75s ease;
}
.fade-leave-active {
  transition: all .75s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
@media screen and (min-width: 769px) {
  .fade-enter, .fade-leave-to {
    transform: translateY(100vh);
  }
}
@media screen and (max-width: 768px) {
  .fade-enter, .fade-leave-to {
    transform: translateX(-100vw);
  }
}
</style>
