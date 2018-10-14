<template>
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
            <textarea type="password" class="form-control" id="message" :placeholder="$t('content.form.messageForm')"></textarea>
          </div>
          <button type="submit" class="btn">{{$t('content.form.buttonSend')}}</button>
        </form>
      </div>
    </div>
    <div class="col-12 col-sm-7">

    </div>
  </div>
</template>

<script>

</script>
