<template>
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

<style lang="scss" scoped>
article {
  position: absolute;
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
  padding: 80px 2.5% 0;
  background-size: cover;
  background-position: center center;
  & + a {
    text-align: center;
  }
  &_heading {
    background: #fff;
    color: #333;
    font-size: 2rem;
    font-weight: 700;
    padding: .5em .75em;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0 1px 1px rgba(0,0,0,.35);
    margin: 0;
  }
  &_heading + p,
  &_heading + p + a {
    display: block;
    background: #fff;
    color: #666;
    line-height: 1.6;
    padding: .5em .75em;
    box-shadow: 0 1px 1px rgba(0,0,0,.35);
  }
  &_heading + p {
    border-bottom: 1px solid #f0f0f0;
    font-size: 1.4rem;
    margin: 0;
  }
  &_type {
    font-size: 1.2rem;
    color: #b0b0b0;
    background: #efefef;
    padding: 2px 5px;
    line-height: 1.8;
    display: inline-block;
    margin-left: 0.5em;
  }
  &_btn {
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
    box-shadow: 0 1px 1px rgba(0,0,0,.45), inset 0 1px 0 rgba(200,200,200,.45);
    transition: all .65s ease-in-out;
    letter-spacing: .075em;
  }
  &_btn:hover {
    background: #384f66;
    box-shadow: 0 1px 1px rgba(0,0,0,.75), inset 0 1px 0 rgba(200,200,200,.45);
  }
  &_btn::before {
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
  &_btn::after {
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
}
</style>
