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
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Arial', Helvetica, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// offsets list
$offset-sizes: ( s: 8px, m: 16px, l: 24px );
// sides list
$sides: ( t: top, b: bottom, l: left, r: right);

// generate padding and margin classes
@mixin offsets($offset-sizes, $sides){
  @each $offsetSuffix, $size in $offset-sizes {
    @each $sideSuffix, $side in $sides {
      .p#{$sideSuffix}-#{$offsetSuffix} {
        padding-#{$side}: $size;
      }
      .m#{$sideSuffix}-#{$offsetSuffix} {
        margin-#{$side}: $size;
      }
    }
    .p-#{$offsetSuffix}{
      padding: $size;
    }
    .m-#{$offsetSuffix}{
      margin: $size;
    }
  }
}

// generate no padding no margin classes
@mixin noOffsets($sides) {
  @each $sideSuffix, $side in $sides {
    .no-p#{$sideSuffix} {
      padding-#{$side}: 0;
    }
    .no-m#{$sideSuffix} {
      margin-#{$side}: 0;
    }
  }
  // no-padding
  .np {
    padding: 0;
  }
  // no-margin
  .nm {
    margin: 0;
  }
}

@include offsets($offset-sizes, $sides);
@include noOffsets($sides);
</style>
