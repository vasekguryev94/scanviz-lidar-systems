<template>
  <div class="products">
    <carousel></carousel>
    <div class="container">
      <div class="col text-center products-content">
        <div class="text-center">
          <h1>{{ $t("content.products.products").toUpperCase() }}</h1>
        </div>
        <div class="row">
          <div class="col-sm-3 col-6">
            <img src="../assets/products_1.png" alt="">
            <h3>{{ $t("content.products.airScan") }}</h3>
          </div>
          <div class="col-sm-3 col-6">
            <img src="../assets/products_2.png" alt="">
            <h3>{{ $t("content.products.mobileScan") }}</h3>
          </div>
          <div class="col-sm-3 col-6">
            <img src="../assets/products_3.png" alt="">
            <h3>{{ $t("content.products.groundScan") }}</h3>
          </div>
          <div class="col-sm-3 col-6">
            <img src="../assets/products_4.png" alt="">
            <h3>{{ $t("content.products.softwareScan") }}</h3>
          </div>
        </div>
        <div class="text-center">
          <h1>{{ $t("content.products.all").toUpperCase() }}</h1>
        </div>
        <div class="row">
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
          <div class="col-sm-4 col-12 image">
            <img src="../assets/camera.png" alt="">
            <div class="image-content">
              <h5>SV-MOBILE</h5>
              <hr>
              <p>{{ $t("content.products.svMobile") }}</p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <h1>{{ $t("content.products.svUni") }}</h1>
        </div>
        <hr>
        <div class="row sv-uni">
          <div class="col-sm-6 col-12">
            <img src="../assets/camera.png" alt="">
          </div>
          <div class="col-sm-6 col-12">
            <img src="../assets/сharacteristic.png" alt="">
          </div>
        </div>
        <div class="row filter">
          <div class="col-sm-4 col-12">
            <img src="../assets/dorogi_2.jpg" alt="">
          </div>
          <div class="col-sm-4 col-12">
            <img src="../assets/dorogi_1.jpg" alt="">
          </div>
          <div class="col-sm-4 col-12">
            <img src="../assets/provoda_1.jpg" alt="">
          </div>
        </div>
        <div class="row text-center req-cost justify-content-center align-items-center">
          <h3>Запросить стоимость</h3>
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

<style lang="scss">
  .products-content {
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
    hr {
      background-color: black;
    }
    .image {
      position: relative;
      width: 100%;
      .image-content {
        padding: 10px;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, #24283B, #2D3B57, #2F4B6A, #2E5E79, #2F6580);
        &:hover {
          opacity: 0.8;
          cursor: default;
        }
        p {
          text-align: left;
          color: white;
        }
        h5 {
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        hr {
          background-color: white;
          margin: 0;
        }
      }
    }
    .sv-uni {
      img {
        width: 100%;
      }
    }
    .filter {
      img {
        border-radius: 5%;
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
      h3 {
        margin: 0;
      }
    }
  }
</style>
