<template>
  <div class="soft">
    <carousel></carousel>
    <div class="container">
      <div class="col soft-content">
        <div class="text-center">
          <h1>{{ $t("content.soft.software").toUpperCase() }}</h1>
        </div>
        <div class="row software-horizontal">
          <div class="col-md-6 col-sm-12">
            <img src="../assets/software_1.png" alt="">
          </div>
          <div class="col-md-6 col-sm-12">
            <img src="../assets/software_2.png" alt="">
          </div>
          <div class="col-md-6 col-sm-12">
            <img src="../assets/software_3.png" alt="">
          </div>
          <div class="col-md-6 col-sm-12">
            <img src="../assets/software_4.png" alt="">
          </div>
        </div>
        <div class="row software-vertical">
          <div class="col-sm-4 col-md col-12">
            <img src="../assets/software_5.png" alt="">
          </div>
          <div class="col-sm-4 col-md col-12">
            <img src="../assets/software_6.png" alt="">
          </div>
          <div class="col-sm-4 col-md col-12">
            <img src="../assets/software_7.png" alt="">
          </div>
          <div class="col-sm-4 col-md col-12">
            <img src="../assets/software_8.png" alt="">
          </div>
          <div class="col-sm-4 col-md col-12">
            <img src="../assets/software_9.png" alt="">
          </div>
        </div>
        <div class="text-center">
          <h1>{{ $t("content.soft.ourTask").toUpperCase() }}</h1>
        </div>
        <div class="row text-center req-cost justify-content-center align-items-center">
          <router-link to="/contacts"><h5>{{ $t("content.soft.reqCost").toUpperCase() }}</h5></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'products',
  components: {
    'carousel': Carousel
  }
}
</script>

<style lang="scss" scoped>
  .soft-content {
    & > div {
      padding: 20px 0;
    }
    h1, h2, h3, h4, h5, h6 {
      background: linear-gradient(to bottom right, #24283B, #2D3B57, #2F4B6A, #2E5E79, #2F6580);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    img {
      max-width:100%;
      max-height:100%;
    }
    .software-horizontal,
    .software-vertical {
      div {
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
    .req-cost {
      width: 320px;
      height: 50px;
      margin: 20px auto;
      background: linear-gradient(to bottom right, white, lightgrey);
      border-radius: 50px;
      border: solid 1px grey;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      &:hover {
        cursor: pointer;
      }
      h5 {
        margin: 0;
      }
    }
  }
</style>
