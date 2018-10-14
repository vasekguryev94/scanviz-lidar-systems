<template>
  <div class="applications">
    <carousel></carousel>
    <div class="container">
      <div class="col text-center applications-content">
        <div class="text-center">
          <h1>{{ $t("content.home.areasOfUse").toUpperCase() }}</h1>
        </div>
        <div class="row areas-of-use">
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_1.png" alt="">
            <p>{{ $t("content.home.areasOfUse_1").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_2.png" alt="">
            <p>{{ $t("content.home.areasOfUse_2").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_3.png" alt="">
            <p>{{ $t("content.home.areasOfUse_3").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_4.png" alt="">
            <p>{{ $t("content.home.areasOfUse_4").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_5.png" alt="">
            <p>{{ $t("content.home.areasOfUse_5").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_6.png" alt="">
            <p>{{ $t("content.home.areasOfUse_6").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_7.png" alt="">
            <p>{{ $t("content.home.areasOfUse_7").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_8.png" alt="">
            <p>{{ $t("content.home.areasOfUse_8").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_9.png" alt="">
            <p>{{ $t("content.home.areasOfUse_9").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_10.png" alt="">
            <p>{{ $t("content.home.areasOfUse_10").toUpperCase() }}</p>
          </div>
          <div class="col-xl-2 col-sm-4 col-12">
            <img class="img-fluid" src="../assets/areas-of-use_11.png" alt="">
            <p>{{ $t("content.home.areasOfUse_11").toUpperCase() }}</p>
          </div>
        </div>
        <div class="text-center">
          <h1>{{ $t("content.home.pointCloud").toUpperCase() }}</h1>
        </div>
        <div class="row iframe">
          <div class="col-sm-6 col-12">
            <iframe src='http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-street'></iframe><br>
            <a href="http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-street" class="text-center">{{ $t("content.home.street") }}</a>
          </div>
          <div class="col-sm-6 col-12">
            <iframe src='http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-gas%20station'></iframe><br>
            <a href="http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-gas%20station" class="text-center">{{ $t("content.home.gasStation") }}</a>
          </div>
          <div class="col-sm-6 col-12">
            <iframe src='http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-road'></iframe><br>
            <a href="http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-road" class="text-center">{{ $t("content.home.road") }}</a>
          </div>
          <div class="col-sm-6 col-12">
            <iframe src='http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-walk%20house'></iframe><br>
            <a href="http://mypointclouds.com/projects/a9ca0348-bc8b-49e9-bc55-ea68d01d2ab3-walk%20house" class="text-center">{{ $t("content.home.walk") }}</a>
          </div>
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
  .applications-content {
    & > div {
      padding: 20px 0;
    }
    h1, h2, h3, h4, h5, h6 {
      background: linear-gradient(to bottom right, #24283B, #2D3B57, #2F4B6A, #2E5E79, #2F6580);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .areas-of-use {
      p {
        text-align: center;
      }
    }
  }
</style>
