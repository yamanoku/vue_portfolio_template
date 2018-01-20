<template>
  <transition name="fade">
    <article>
      <template v-for="list in lists">
        <div class="detail" v-if="$route.path === '/work/' + list.id + '/detail'" :style="{ backgroundImage: 'url('+ list.image +')' }" :key="list.id">
          <h2 class="detail_heading">No.{{list.id}} - {{list.title}}
            <span class="detail_type">{{list.type}}</span>
          </h2>
          <p>{{list.desc}}</p>
          <a :href="list.url" target="_blank">{{list.url}}</a>
        </div>
      </template>
      <router-link class="detail_btn" to="/home">Back Home</router-link>
    </article>
  </transition>
</template>

<script>
import jsonData from '@/assets/data/list.json'
export default {
  data () {
    return {
      lists: jsonData
    }
  }
}
</script>

<style scoped>
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
}
.detail {
  height: 100%;
  margin: auto;
  padding: 30px 5% 0;
  background-size: cover;
  background-position: center center;
}
.detail + a {
  text-align: center;
}
.detail_heading {
  background: #fff;
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 50px;
  padding: .5em .75em;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 1px 1px rgba(0,0,0,.35);
}
.detail_heading + p,
.detail_heading + p + a {
  display: block;
  background: #fff;
  color: #666;
  line-height: 1.6;
  padding: .5em .75em;
  box-shadow: 0 1px 1px rgba(0,0,0,.35);
}
.detail_heading + p {
  border-bottom: 1px solid #f0f0f0;
  font-size: 1.4rem;
}
.detail_type {
  font-size: 1.2rem;
  color: #b0b0b0;
  background: #efefef;
  padding: 2px 5px;
  line-height: 1.8;
  display: inline-block;
  margin-left: 0.5em;
}
.detail_btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 0;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #456a8e;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 1px 1px rgba(0,0,0,.45), inset 0 1px 0 rgba(200,200,200,.45);
  transition: all .65s ease-in-out;
  letter-spacing: .075em;
}
.detail_btn:hover {
  background: #384f66;
  box-shadow: 0 1px 1px rgba(0,0,0,.75), inset 0 1px 0 rgba(200,200,200,.45);
}
.detail_btn::before {
  content: '';
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
  content: '';
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
