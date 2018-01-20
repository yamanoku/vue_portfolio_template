<template>
  <transition name="fade">
    <section class="main">
      <div class="textfield">
        <input class="textfield_input" type="text" placeholder="Search Words..." v-model="filterKey" />
      </div>
      <p class="logo"><router-link to="/profile"><img src="../assets/img/icon_beta.png" alt=""></router-link></p>
      <div class="container">
        <div class="card" v-for="list in filterItems" :key="list.id">
          <router-link :to="{ name: 'Works', params: { number: list.id }}" :class="'card_img'+ list.id + ' card_img'">
            <img :src="list.image" :alt="list.title">
          </router-link>
          <div class="card_detail">
            <router-link :to="{ name: 'Works', params: { number: list.id }}" class="filetype">[{{ list.type }}]</router-link>
          </div>
        </div>
      </div>
      <h2 class="no-result" v-show="filterItems.length==0">
        <span>No results.</span><br />
        <span>\(^Д^)/</span>
      </h2>
    </section>
  </transition>
</template>

<script>
import imagesData from '@/assets/data/list.json'
export default {
  data () {
    return {
      filterKey: '',
      lists: imagesData
    }
  },
  computed: {
    filterItems: function () {
      return this.lists.filter((list) => {
        const searchRegex = new RegExp(this.filterKey, 'i')
        return (
          searchRegex.test(list.title) ||
          searchRegex.test(list.type) ||
          searchRegex.test(list.desc)
        )
      })
    }
  }
}
</script>

<style scoped>
.logo {
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  display: block;
  z-index: 10;
  width: 50px;
  height: 50px;
}
.logo img {
  width: 100%;
  height: auto;
}
.logo a {
  transition: opacity .25s ease-in;
}
.logo a:hover img {
  opacity: .75;
}
.about:hover {
  text-decoration: none;
}
.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  width: 95%;
  margin: auto;
}
.container::before {
  display: block;
  content: "";
  order: 1;
  width: 22.75%;
}
.container::after {
  display: block;
  content: "";
  width: 22.75%;
}
.card {
  width: 22.75%;
  margin-bottom: 2.5%;
  background: #456a8e;
  border-radius: 3px;
  transition: all .25s ease-in-out;
}
.card:hover {
  background: #384f66;
}
.card_img {
  display: block;
  transition: all .25s ease-in;
  opacity: 1;
}
.card_img:hover {
  opacity: .75;
}
.card_img img {
  width: 100%;
  height: auto;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.card_detail {
  padding: 6px 10px;
}
.filetype {
  color: #f0f0f0;
  font-size: 14px;
  font-weight: 500;
  display: block;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.textfield {
  padding: 0;
  background-color: #f0f0f0;
  margin: 0 auto 30px;
  width: 60%;
  max-width: 320px;
  display: flex;
  padding-top: 30px;
}
.textfield_input {
  appearance: none;
  background: transparent;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}
.textfield_input:focus {
  outline: 0;
}
.no-result {
  text-align: center;
  font-size: 36px;
  letter-spacing: .075em;
  font-weight: 700;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .card {
    width: 48.5%;
  }
}
@media screen and (max-width: 480px) {
  .card {
    width: 100%;
  }
}
</style>
