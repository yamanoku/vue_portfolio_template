<template>
  <main class="main">
    <cover>
      <div class="textfield">
        <label class="textfield_label" for="search">
          <p class="hidden-text" id="search_text">
            Input form to search for project
          </p>
          <input
            id="search"
            aria-describedby="search_text"
            class="textfield_input"
            type="text"
            placeholder="Search Words..."
            v-model="filterKey"
          />
        </label>
      </div>
      <div class="container" v-show="filterItems.length !== 0">
        <grid>
          <div class="card" v-for="list in filterItems" :key="list.id">
            <router-link
              :to="{ name: 'Works', params: { number: list.id } }"
              :class="'card_img' + list.id + ' card_img'"
            >
              <img :src="list.image" :alt="list.title" />
            </router-link>
            <div class="card_detail">
              <router-link
                :to="{ name: 'Works', params: { number: list.id } }"
                class="filetype"
                >[{{ list.type }}]</router-link
              >
            </div>
          </div>
        </grid>
      </div>
      <h2 class="no-result" v-show="filterItems.length === 0">
        <span>No results.</span>
        <span>\(^Д^)/</span>
      </h2>
    </cover>
    <p class="logo">
      <router-link to="/profile" class="logo-link">
        <img src="/icon_beta.png" alt="profile Detail" />
      </router-link>
    </p>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Cover from "@/components/layouts/Cover.vue";
import Grid from "@/components/layouts/Grid.vue";
import listData from "@/assets/data/list.json";
import type { typeListData } from "@/types/listData";

const filterKey = ref("");
const lists: Array<typeListData> = listData;
const filterItems = computed(() => lists.filter(list => {
  const searchRegex = new RegExp(filterKey.value, "i");
  return (
    searchRegex.test(list.title) ||
    searchRegex.test(list.type) ||
    searchRegex.test(list.desc)
  );
}));
</script>

<style scoped>
.logo {
  position: absolute;
  top: 20px;
  right: 2.5%;
  display: block;
  z-index: 10;
  width: 50px;
  height: 50px;
  margin: 0;
}
.logo img {
  width: 100%;
  height: auto;
}
.logo a {
  transition: opacity 0.25s ease-in;
}
.logo a:hover img {
  opacity: 0.75;
}
.about:hover {
  text-decoration: none;
}
.main {
  background-color: #f0f0f0;
}
.container {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
.card {
  background: #456a8e;
  border-radius: 3px;
  transition: all 0.25s ease-in-out;
}

.card:hover {
  background: #384f66;
}
.card_img {
  display: block;
  transition: all 0.25s ease-in;
  opacity: 1;
}
.card_img:hover {
  opacity: 0.75;
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
  background-color: #f0f0f0;
  margin: 0 auto 30px;
  width: 60%;
  max-width: 320px;
  display: flex;
  padding-top: 30px;
}
.textfield_label {
  width: 100%;
}
.textfield_input {
  appearance: none;
  background: transparent;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
}
.textfield_input:focus {
  outline: 0;
}
.no-result {
  text-align: center;
  font-size: 10.5vw;
  letter-spacing: 0.075em;
  font-weight: 700;
}
.no-result span {
  display: block;
}
.hidden-text {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
