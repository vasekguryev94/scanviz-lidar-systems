<template>
    <div>
        <carousel>
        </carousel>
        <!--<footerElement>-->
        <!--</footerElement>-->
    </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    'carousel': Carousel,
    'footerElement': Footer
  }
}
</script>
