<template>
    <div class="container footer pt-4 pb-4">
        <div class="row align-items-center">
            <div class="col-sm-4 text-sm-left text-center order-last order-sm-0 align-items-center pt-3 pt-sm-0">
                <div class="col-sm-12">
                    <img src="../assets/logo-footer.png" alt="" class="icon-big img-fluid">
                </div>
                <div class="col-sm-11 offset-sm-1 pt-l">
                    <span class="small">{{ $t("content.footer.copyright")}}</span>
                </div>
            </div>
            <div class="col-sm-4 text-center pb-2 pb-sm-0">
                <div class="col-sm-12 justify-content-center">{{ $t("content.footer.subscribe") }}</div>
                <div class="col-sm-12 justify-content-center ">
                    <a href="#"><img src="../assets/facebook-footer.png" alt="" class="icon"></a>
                    <a href="#"><img src="../assets/vk-footer.png" alt="" class="icon"></a>
                    <a href="#"><img src="../assets/youtube-footer.png" alt="" class="icon"></a>
                </div>
                <div class="col-sm-12 mt-2">
                    <router-link to="/">{{ $t("content.header.home").toUpperCase() }}</router-link>
                    |
                    <router-link to="/products">{{ $t("content.header.products").toUpperCase() }}</router-link>
                    |
                    <!-- <a href="/#areasOfUse">{{ $t("content.header.applications").toUpperCase() }}</a> -->
                    <router-link to="/applications">{{ $t("content.header.applications").toUpperCase() }}</router-link>
                </div>
                <div class="col-sm-12">
                    <router-link to="/soft">{{ $t("content.header.soft").toUpperCase() }}</router-link>
                    |
                    <router-link to="/contacts">{{ $t("content.header.contacts").toUpperCase() }}</router-link>
                    |
                    <router-link to="/about">{{ $t("content.header.about").toUpperCase() }}</router-link>
                </div>
            </div>
            <div class="col-sm-4 justify-content-start text-sm-left text-center pb-2 pb-sm-0">
                <div class="col-sm-12 pl-4">{{ $t("content.footer.contacts") }} :</div>
                <div class="col-sm-12"><img src="../assets/phone-footer.png" alt="" class="icon pr-s">{{ $t("content.footer.phone") }}</div>
                <div class="col-sm-12"><img src="../assets/mail-footer.png" alt="" class="icon pr-s">{{ $t("content.footer.email") }}</div>
                <div class="col-sm-12"><img src="../assets/address-footer.png" alt="" class="icon pr-s">{{ $t("content.footer.address") }}</div>

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

    .icon {
        height: 32px;
    }

    .icon-big {
        max-height: 64px;
    }

    .small {
        font-size: 12px;
    }
</style>
