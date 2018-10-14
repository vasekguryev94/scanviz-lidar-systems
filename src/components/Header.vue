<template>
  <div class="container header pt-3 pb-3">
    <div id="nav" class="row align-items-center">
      <div class="col-sm-4 d-none d-sm-inline-flex">
        <img src='../assets/logo-header.png' class="icon img-fluid" name="sphere">
      </div>
      <div class="header-right col-12 col-sm-8">
        <div class="row align-items-center">
          <div class="header-nav col-sm-9">
            <div class="row float-xl-right">

              <router-link class="ml-1 ml-xl-0" to="/">{{ $t("content.header.home").toUpperCase() }}</router-link>
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
              <router-link to="/applications">{{ $t("content.header.applications").toUpperCase() }}</router-link>
              <router-link to="/soft">{{ $t("content.header.soft").toUpperCase() }}</router-link>
              <router-link to="/contacts">{{ $t("content.header.contacts").toUpperCase() }}</router-link>
              <router-link to="/about">{{ $t("content.header.about").toUpperCase() }}</router-link>
            </div>
          </div>
          <div class="header-telephone col-sm-3">
            <img src='../assets/phone_header.png' class="icon" name="phone_header">
            <label for="phone_header">(123) 456-789</label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="container header pt-m pb-m">-->
    <!--<div class="row">-->
      <!--<div class="col-sm-3">-->
        <!--<img src='../assets/logo-header.png' class="icon" name="sphere">-->
      <!--</div>-->
      <!--<div class="col-sm-7">-->
        <!--<router-link to="/">{{ $t("content.header.home").toUpperCase() }}</router-link>-->
        <!--<router-link class="header-products" to="/products">-->
        <!--{{ $t("content.header.products").toUpperCase() }}-->
        <!--<ul class="header-submenu">-->
        <!--<li>меню второго уровня-->
        <!--</li>-->
        <!--<li>меню второго уровня-->
        <!--</li>-->
        <!--<li>меню второго уровня-->
        <!--</li>-->
        <!--</ul>-->
        <!--</router-link>-->
        <!--<router-link to="/applications">{{ $t("content.header.applications").toUpperCase() }}</router-link>-->
        <!--<router-link to="/soft">{{ $t("content.header.soft").toUpperCase() }}</router-link>-->
        <!--<router-link to="/contacts">{{ $t("content.header.contacts").toUpperCase() }}</router-link>-->
        <!--<router-link to="/about">{{ $t("content.header.about").toUpperCase() }}</router-link>-->
      <!--</div>-->
      <!--<div class="col-sm-2"></div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
export default {
}
</script>

<style lang="scss">

  .header {
    background-image: linear-gradient(#C5C6C6, #EDEDED, #FEFEFE, #EDEDED, #C5C6C6);
    background-color: #EDEDED;
    max-width: unset!important;
  }

  #nav {
    // + * {
    //   margin-top: 80px;
    //   overflow: auto;
    // }
    /*width: 100%;*/
    /*height: 80px;*/
    // position: fixed;
    // top: 0;
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*background-image: linear-gradient(#C5C6C6, #EDEDED, #FEFEFE, #EDEDED, #C5C6C6);*/
    /*background-color: #EDEDED;*/
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
    .header-telephone,
    .header-right {
      /*display: flex;*/
      /*align-items: center;*/
      /*justify-content: center;*/
      /*margin: 5px 20px;*/
      /*img {*/
        /*margin: 5px 10px;*/
      /*}*/
      /*label {*/
        /*margin: 0;*/
      /*}*/
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
        max-height: 48px;
    }
  }
</style>
