<template>
  <div id="app">
    <header-element></header-element>
    <router-view/>
    <footer-element></footer-element>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  name: 'app',
  components: {
    'footerElement': Footer,
    'headerElement': Header
  },
  created () {
    // let ckeditor = document.createElement('script')
    // ckeditor.setAttribute('src', 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js')
    // document.head.appendChild(ckeditor)
    // emailjs.init('user_2Yie6jIsgYdc4eUGQvvLJ')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Arial', Helvetica, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

a:hover {
  color: #2c3e50!important;
  text-decoration: none!important;
}

a {
  color: #2c3e50!important;
  text-decoration: none!important;
}

</style>
