<template>
  <article>
    <div class="detail-404">
      <h2 class="detail-404-heading">404</h2>
      <router-link class="detail_btn" to="/">Back Home</router-link>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.detail {
  &-404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #f0f0f0;
    &-heading {
      font-size: 10rem;
      letter-spacing: .15em;
      margin: 0;
    }
  }
  &_btn {
    display: inline-block;
    width: 130px;
    margin-top: 50px;
    background: #384f66;
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;
    line-height: 32px;
    height: 32px;
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0,0,0,.45), inset 0 1px 0 rgba(200,200,200,.45);
    transition: background .65s ease-in-out;
    letter-spacing: .075em;
    &:hover {
      background: #456a8e;
    }
  }
}
</style>
