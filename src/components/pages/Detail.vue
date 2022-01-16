<template>
  <article>
    <template v-for="list in lists">
      <div
        class="detail"
        v-if="$route.path === '/work/' + list.id + '/detail'"
        :style="{ backgroundImage: 'url(' + list.image + ')' }"
        :key="list.id"
      >
        <h2 class="detail_heading">
          No.{{ list.id }} - {{ list.title }}
          <span class="detail_type">{{ list.type }}</span>
        </h2>
        <div class="detail_description">
          <p v-for="text in textCompile(list.desc)" :key="text">
            {{ text }}
          </p>
        </div>
        <a :href="list.url" target="_blank">{{ list.url }}</a>
      </div>
    </template>
    <router-link class="detail_btn" to="/">Back Home</router-link>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import listData from "@/assets/data/list.json";
import type { typeListData } from "@/types/listData";

export default defineComponent({
  setup() {
    const lists: Array<typeListData> = listData;
    const textCompile = (text: string): string[] => {
      return text.split(/\n/g);
    }
    return { lists, textCompile };
  }
});
</script>

<style scoped>
article {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  display: block;
}
.detail {
  height: 100%;
  margin: auto;
  padding: 80px 2.5% 2.5%;
  background-size: cover;
  background-position: center center;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.detail + a {
  text-align: center;
}
.detail_heading {
  background: #fff;
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5em 0.75em;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom: 1px solid #dadada;
  margin: 0;
}
.detail_description,
.detail_description + a {
  display: block;
  background: #fff;
  color: #666;
  line-height: 1.6;
  padding: 0.5em 0.75em;
}
.detail_description {
  border-bottom: 1px solid #dadada;
  overflow-y: scroll;
  display: grid;
  grid-row-gap: 10px;
}
.detail_description p {
  font-size: 1.4rem;
  margin: 0;
}
.detail_description + a {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.detail_type {
  font-size: 1.2rem;
  color: #333;
  background: #efefef;
  padding: 2px 5px;
  line-height: 1.8;
  display: inline-block;
  margin-left: 0.5em;
}
.detail_btn {
  position: absolute;
  top: 20px;
  right: 2.5%;
  font-size: 0;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #456a8e;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(200, 200, 200, 0.45);
  transition: all 0.65s ease-in-out;
  letter-spacing: 0.075em;
}
.detail_btn:hover {
  background: #384f66;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.75),
    inset 0 1px 0 rgba(200, 200, 200, 0.45);
}
.detail_btn::before {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: rotate(45deg);
}
.detail_btn::after {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 50%;
  right: 25%;
  transform: rotate(-45deg);
}
</style>
