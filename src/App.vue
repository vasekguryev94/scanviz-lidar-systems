<template>
  <div id="app">
    <div id="nav">
      <div class="header-logo">
        <img src='./assets/Sphere_40x40.png' name="sphere">
        <label for="sphere">ScanViz Lidar Systems</label>
      </div>
      <div class="heder-right">
        <div class="header-nav">
          <router-link to="/">{{ $t("content.header.home") }}</router-link>
          <router-link to="/products">{{ $t("content.header.products") }}</router-link>
          <router-link to="/applications">{{ $t("content.header.applications") }}</router-link>
          <router-link to="/soft">{{ $t("content.header.soft") }}</router-link>
          <router-link to="/contacts">{{ $t("content.header.contacts") }}</router-link>
          <router-link to="/about">{{ $t("content.header.about") }}</router-link>
        </div>
        <div class="header-telephone">
          <img src='./assets/telephone_up_24x24.png' name="telephone_up">
          <label for="telephone_up">(123) 456-789</label>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Arial', Helvetica, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(#C5C6C6, #EDEDED, #FEFEFE, #EDEDED, #C5C6C6);
  background-color: #EDEDED;
  a {
    font-weight: bold;
    color: grey;
    text-decoration: none;
    padding: 6px 10px;
    &.router-link-exact-active,
    &:hover,
    &:active,
    &:focus {
      background-image: linear-gradient(#666666, #8D8D8D, #666666);
      background-color: #8D8D8D;
      color: lightgrey;
    }
    &:not(:first-child) {
      border-left: 1px solid lightgrey;
      margin-left: 0;
      padding-left: 10px;
    }
  }
  .header-logo,
  .header-nav,
  .header-telephone,
  .heder-right {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 20px;
    img {
      margin: 5px 10px;
    }
  }
}
</style>
