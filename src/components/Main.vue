<template>
  <section class="main">
    <div class="textfield">
      <label class="textfield_label" for="search">
        <p class="hidden-text" id="search_text">Input form to search for project</p>
        <input id="search" aria-describedby="search_text" class="textfield_input" type="text" placeholder="Search Words..." v-model="filterKey" />
      </label>
    </div>
    <p class="logo">
      <router-link to="/profile" class="logo-link">
        <img :src="icon" alt="profile Detail">
      </router-link>
    </p>
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
      <span>No results.</span>
      <span>\(^Д^)/</span>
    </h2>
  </section>
</template>

<script>
import imagesData from '@/assets/data/list.json'
import icon from '@/assets/img/icon_beta.png'
export default {
  data () {
    return {
      filterKey: '',
      lists: imagesData,
      icon
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

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  display: block;
  z-index: 10;
  width: 50px;
  height: 50px;
  margin: 0;
  img {
    width: 100%;
    height: auto;
  }
  a {
    transition: opacity .25s ease-in;
    &:hover img {
      opacity: .75;
    }
  }
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
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  &:empty {
    padding: 0;
  }
}
.card {
  background: #456a8e;
  border-radius: 3px;
  transition: all .25s ease-in-out;
  &:hover {
    background: #384f66;
  }
  &_img {
    display: block;
    transition: all .25s ease-in;
    opacity: 1;
    &:hover {
      opacity: .75;
    }
    img {
      width: 100%;
      height: auto;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }
  &_detail {
    padding: 6px 10px;
  }
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
  &_label {
    width: 100%;
  }
  &_input {
    appearance: none;
    background: transparent;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 6px 0;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
  }
  &_input:focus {
    outline: 0;
  }
}
.no-result {
  text-align: center;
  font-size: 10.5vw;
  letter-spacing: .075em;
  font-weight: 700;
  width: 100%;
  height: calc(100% - 60px);
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  span {
    display: block;
  }
}
.hidden-text {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
