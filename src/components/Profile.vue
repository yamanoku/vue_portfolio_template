<template>
  <article>
    <div class="detail-prof">
      <section>
        <h2>大山奥人 | Okuto Oyama.</h2>
        <ul>
          <li>性別 : 男 | Sex : Man</li>
          <li>誕生日 : 10月30日 | Birth : 10/30</li>
          <li>現住所 : 千葉県鎌ケ谷市 | Location : Kamagaya / Chiba / Japan</li>
          <li>E-mail : 0910yama@gmail.com</li>
        </ul>
        <ol>
          <li>1989 : 秋田県能代市にて生まれる | Born in Noshiro, Akita</li>
          <li>2008 : 岩手大学芸術文化課程 入学 | Get into Iwate University of Art and Culture Course</li>
          <li>2014 : 結婚 | Get married</li>
          <li>2016 : 娘が生まれる | Born daughter</li>
        </ol>
        <div class="sns">
          <a href="https://twitter.com/yamanoku" target="_blank">Twitter</a>
          <a href="https://www.facebook.com/yamanoku" target="_blank">Facebook</a>
          <a href="http://yamanoku.tumblr.com" target="_blank">Tumblr</a>
          <a href="https://github.com/yamanoku" target="_blank">Github</a>
        </div>
      </section>
      <router-link class="detail_btn" to="/home">Back Home</router-link>
    </div>
  </article>
</template>

<style scoped>
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
section {
  display: block;
  background: rgba(255,255,255,.9);
  padding: 1em;
  border-radius: 3px;
  position: relative;
  overflow-y: scroll;
  height: 100%;
}
h2 {
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
}
p, ul, ol {
  margin: .75em 0 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1.8;
}
ul, ol {
  list-style-type: none;
}
.sns {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.sns a {
  margin-right: 10px;
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
  padding: 80px 2.5% 2.5%;
  background: url(../assets/img/iam.jpg) center center;
  background-size: cover;
  color: #444;
}
.detail_btn {
  position: absolute;
  top: 10px;
  right: 2.5%;
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
