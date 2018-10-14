<template>
  <div id="nav">
    <div class="header-logo">
      <img src='../assets/Sphere_40x40.png' name="sphere">
      <label for="sphere">ScanViz Lidar Systems</label>
    </div>
    <div class="header-right">
      <div class="header-nav">
        <router-link to="/">{{ $t("content.header.home").toUpperCase() }}</router-link>
        <router-link class="header-products" to="/products">
          {{ $t("content.header.products").toUpperCase() }}
          <ul class="header-submenu">
            <li>меню второго уровня
            </li>
            <li>меню второго уровня
            </li>
            <li>меню второго уровня
            </li>
          </ul>
        </router-link>
        <a href="/#areasOfUse">{{ $t("content.header.applications").toUpperCase() }}</a>
        <!-- <router-link to="/#areasOfUse">{{ $t("content.header.applications").toUpperCase() }}</router-link> -->
        <router-link to="/soft">{{ $t("content.header.soft").toUpperCase() }}</router-link>
        <router-link to="/contacts">{{ $t("content.header.contacts").toUpperCase() }}</router-link>
        <router-link to="/about">{{ $t("content.header.about").toUpperCase() }}</router-link>
      </div>
      <div class="header-phone">
        <img src='../assets/phone_header.png' class="icon" name="phone_header">
        <label for="phone_header">(123) 456-789</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  #nav {
    // + * {
    //   margin-top: 80px;
    //   overflow: auto;
    // }
    width: 100%;
    height: 80px;
    // position: fixed;
    // top: 0;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(#C5C6C6, #EDEDED, #FEFEFE, #EDEDED, #C5C6C6);
    background-color: #EDEDED;
    a {
      color: grey;
      text-decoration: none;
      padding: 6px 10px;
      white-space: nowrap;
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
    .header-phone,
    .header-right {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 20px;
      img {
        margin: 5px 10px;
      }
      label {
        margin: 0;
      }
    }
    .header-nav {
      &.header-submenu:after {
        content: "";
        display: table;
        clear: both;
      }
      &.header-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
    .header-products {
      &:hover {
        > .header-submenu {
          transform: rotateX(0deg);
          visibility: visible;
          opacity: 1;
        }
      }
    }
    .header-submenu {
      position: absolute;
      z-index: 100000;
      min-width: 200px;
      background: white;
      border-top: 1px solid #CBCBCC;
      border-left: 1px solid #CBCBCC;
      border-right: 1px solid #CBCBCC;
      visibility: hidden;
      opacity: 0;
      transform-origin: 0% 0%;
      transform: rotateX(-90deg);
      transition: .3s linear;
      li {
        position: relative;
        a {
          color: #282828;
          padding: 10px 20px;
          font-size: 13px;
          border-bottom: 1px solid #CBCBCC;
        }
      }
    }
    .icon {
        height: 32px;
    }
  }
</style>
