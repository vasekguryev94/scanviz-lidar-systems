<template>
  <div class="home">
    <carousel></carousel>
    <div class="container">
      <div class="col text-center home-content">
        <div class="text-center">
          <h1>{{ $t("content.home.mobileLaserScan").toUpperCase() }}</h1>
          <p>{{ $t("content.home.mobileLaserScanThis") }}</p>
        </div>
        <div class="row">
          <div class="col-sm-6 col-12">
            <img src="../assets/home_1.png" alt="">
          </div>
          <div class="col-sm-6 col-12">
            <img src="../assets/home_2.png" alt="">
          </div>
        </div>
        <div class="text-center">
          <h1>{{ $t("content.home.scanVizThis").toUpperCase() }}</h1>
          <p>{{ $t("content.home.scanVizThisContent") }}</p>
        </div>
        <div class="row">
          <div class="col-12">
            <img src="../assets/cameras.png" alt="">
          </div>
          <div class="col-12 row mount">
            <div class="col-md col-sm-6 col-12">
              <img src="../assets/mount_1.png" alt="">
              <h3>{{ $t("content.home.car").toUpperCase() }}</h3>
              <p>{{ $t("content.home.carContent") }}</p>
            </div>
            <div class="col-md col-sm-6 col-12">
              <img src="../assets/mount_2.png" alt="">
              <h3>{{ $t("content.home.drone").toUpperCase() }}</h3>
              <p>{{ $t("content.home.carContent") }}</p>
            </div>
            <div class="col-md col-sm-6 col-12">
              <img src="../assets/mount_3.png" alt="">
              <h3>{{ $t("content.home.withoutPilot").toUpperCase() }}</h3>
              <p>{{ $t("content.home.carContent") }}</p>
            </div>
            <div class="col-md col-sm-6 col-12">
              <img src="../assets/mount_4.png" alt="">
              <h3>{{ $t("content.home.boat").toUpperCase() }}</h3>
              <p>{{ $t("content.home.carContent") }}</p>
            </div>
            <div class="col-md col-sm-6 col-12">
              <img src="../assets/mount_5.png" alt="">
              <h3>{{ $t("content.home.backpack").toUpperCase() }}</h3>
              <p>{{ $t("content.home.carContent") }}</p>
            </div>
          </div>
        </div>
        <div class="text-center" id="areasOfUse">
          <h1>{{ $t("content.home.areasOfUse").toUpperCase() }}</h1>
        </div>
        <div class="row areas-of-use">
          <div class="col-12 row">
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_1.png" alt="">
              <p>{{ $t("content.home.areasOfUse_1").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_2.png" alt="">
              <p>{{ $t("content.home.areasOfUse_2").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_3.png" alt="">
              <p>{{ $t("content.home.areasOfUse_3").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_4.png" alt="">
              <p>{{ $t("content.home.areasOfUse_4").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_5.png" alt="">
              <p>{{ $t("content.home.areasOfUse_5").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_6.png" alt="">
              <p>{{ $t("content.home.areasOfUse_6").toUpperCase() }}</p>
            </div>
          </div>
          <div class="col-12 row">
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_7.png" alt="">
              <p>{{ $t("content.home.areasOfUse_7").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_8.png" alt="">
              <p>{{ $t("content.home.areasOfUse_8").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_9.png" alt="">
              <p>{{ $t("content.home.areasOfUse_9").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_10.png" alt="">
              <p>{{ $t("content.home.areasOfUse_10").toUpperCase() }}</p>
            </div>
            <div class="col-xl col-sm-4 col-12">
              <img src="../assets/areas-of-use_11.png" alt="">
              <p>{{ $t("content.home.areasOfUse_11").toUpperCase() }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <img src="../assets/logos.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'home',
  components: {
    'carousel': Carousel
  }
}
</script>

<style scoped lang="scss">
  .home-content {
    & > div {
      padding: 20px 0;
    }
    p {
      text-align: justify;
    }
    h1, h2, h3, h4, h5, h6 {
      background: linear-gradient(to bottom right, #24283B, #2D3B57, #2F4B6A, #2E5E79, #2F6580);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .mount {
      img {
        max-width: 170px;
        max-height: 170px;
      }
      padding: 20px 0;
    }
    .mount,
    .areas-of-use {
      p {
        text-align: center;
      }
    }
    img {
      max-width:100%;
      max-height:100%;
    }
  }
</style>
