<template>
    <div class="container footer pt-m pb-m">
        <div class="row footer__content">
            <div class="col-sm-4 text-left align-items-center">
                <img src="../assets/Sphere_40x40.png" alt="" class="float-left pr-s">
                <span>
                    {{ $t("content.footer.logoSpan") }}
                </span>
            </div>
            <div class="col-sm-4">
                <div class="row text-center">{{ $t("content.footer.subscribe") }}</div>
                <div class="row text-center">
                    <a href="#"><img src="../assets/facebook-footer.png" alt="" class="icon"></a>
                    <a href="#"><img src="../assets/vk-footer.png" alt="" class="icon"></a>
                    <a href="#"><img src="../assets/youtube-footer.png" alt="" class="icon"></a>
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="row align-items-center pl-l">{{ $t("content.footer.contacts") }} :</div>
                <div class="row align-items-center"><img src="../assets/phone-footer.png" alt="" class="icon pr-s">{{ $t("content.footer.phone") }}</div>
                <div class="row align-items-center"><img src="../assets/mail-footer.png" alt="" class="icon pr-s">{{ $t("content.footer.email") }}</div>
                <div class="row align-items-center"><img src="../assets/address-footer.png" alt="" class="icon pr-s">{{ $t("content.footer.address") }}</div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
    .footer {
        background-image: linear-gradient(#C5C6C6, #EDEDED, #FEFEFE, #EDEDED, #C5C6C6);
        background-color: #EDEDED;
        max-width: unset;
    }

    .footer__content {

    }

    .icon {
        height: 32px;
    }
</style>
