<template>
  <div class="about">
    <carousel></carousel>
    <div class="container">
      <div class="col text-center about-content">
        <div class="text-center">
          <h1>{{ $t("content.about.about").toUpperCase() }}</h1>
          <p>{{ $t("content.about.aboutContent") }}</p>
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
  .about-content {
    & > div {
      padding: 20px 0;
    }
    h1, h2, h3, h4, h5, h6 {
      background: linear-gradient(to bottom right, #24283B, #2D3B57, #2F4B6A, #2E5E79, #2F6580);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
