<template>
  <transition name="fade">
    <article>
      <div class="detail-prof">
        <section>
          <h2>大山奥人 | Okuto Oyama.</h2>
          <ul>
            <li>性別 : 男 | Sex : Man</li>
            <li>誕生日 : 10月30日 | Birth : 10/30</li>
            <li>現所在地 : 東京都足立区 | Location : Adachi / Tokyo / Japan</li>
            <li>E-mail : 0910yama@gmail.com</li>
          </ul>
          <ul>
            <li>1989 : 秋田県能代市にて生まれる | Born in Noshiro, Akita</li>
            <li>2008 : 岩手大学芸術文化課程 入学 | Get into Iwate University of Art and Culture Course</li>
            <li>2014 : 結婚 | Get married</li>
            <li>2016 : 娘が生まれる | Born daughter</li>
          </ul>
          <ol>
            <li><a href="https://twitter.com/yamanoku" target="_blank">Twitter</a></li>
            <li><a href="https://www.facebook.com/yamanoku" target="_blank">Facebook</a></li>
            <li><a href="http://yamanoku.tumblr.com" target="_blank">Tumblr</a></li>
            <li><a href="https://github.com/yamanoku" target="_blank">Github</a></li>
          </ol>
        </section>
        <router-link class="detail_btn" to="/home">Back Home</router-link>
      </div>
    </article>
  </transition>
</template>

<style scoped>
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
section {
  background: rgba(255,255,255,.95);
  padding: 1em;
  border-radius: 3px;
  position: relative;
}
h2 {
  font-size: 2rem;
}
p, ul {
  margin-top: .75em;
  font-size: 1.4rem;
  line-height: 1.8;
}
ol {
  margin-top: 20px;
}
ol li {
  display: inline-block;
  margin-right: 5px;
}
a {
  color: #456a8e;
}
a:hover {
  text-decoration: none;
}
.detail-prof {
  height: 100%;
  margin: auto;
  padding: 6vh 5% 0;
  background: url(../assets/img/iam.jpg) center center;
  background-size: cover;
  color: #444;
}
.detail_btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 0;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: auto;
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
