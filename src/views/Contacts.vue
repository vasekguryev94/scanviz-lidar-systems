<template>
  <div>
    <carousel></carousel>
    <div class="contacts container pt-3 pb-3">

      <h1 class="text-center">{{$t('content.form.h1')}}</h1>
      <div class="row">
          <div class="col-12 col-sm-5">
              <form>
                  <div class="form-group">
                      <input class="form-control" id="name" aria-describedby="emailHelp" :placeholder="$t('content.form.nameForm')">
                  </div>
                  <div class="form-group">
                      <input class="form-control" id="email" :placeholder="$t('content.form.emailForm')">
                  </div>
                  <div class="form-group">
                      <textarea rows="5" type="password" class="form-control" id="message" :placeholder="$t('content.form.messageForm')"></textarea>
                  </div>
                  <button type="submit" class="btn">{{$t('content.form.buttonSend')}}</button>
              </form>
          </div>
          <div class="col-12 col-sm-7 pt-3 pt-sm-0">
              <p>{{$t('content.form.p1')}}</p>
              <span class="font-weight-bold">{{$t('content.form.addressLabel')}}:</span><br>
              <span>{{$t('content.form.address')}}</span>
              <hr>
              <span class="font-weight-bold">{{$t('content.form.phoneLabel')}}:</span><br>
              <span>{{$t('content.form.phone')}}</span>
              <hr>
              <span class="font-weight-bold">{{$t('content.form.emailLabel')}}:</span><br>
              <a :href="'mailto:'+$t('content.form.email')">{{$t('content.form.email')}}</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'contacts',
  components: {
    'carousel': Carousel
  }
}
</script>
