<template>
  <div id="play">
    <div class="doodle-screen">
      <div class="doodle-screen-inner">
        <div v-if="url.length <=0">
          A valid Doodle source could not be loaded.
        </div>
        <iframe id="hplogo-complex" v-bind:src="$route.params.url" frameborder="0" height="304px" width="800px" scrolling="no"></iframe>
      </div>
    </div>

    <section class="doodle-go-back">
      <a href="javascript:history.go(-1)"> Go Back</a> | <a v-bind:href="$route.params.url" target="_blank">View Doodle</a>
    </section>
  </div>
</template>
<script>

export default {
  name: 'DoodlePlay',
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
#play {
  height: 100%;
  margin-top: 30px;
}

.mobile.landscape #play {
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
}
#play .doodle-screen {
  background-image: url('/static/img/screen.png');
  background-size: 600px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#play .doodle-screen-inner iframe {
  width: 100%;
}

#play .doodle-screen-inner {
    height: 100%;
    width: 510px;
    border-radius: 25px;
    height: 290px;
    overflow: hidden;
}

.mobile #play .doodle-screen {
  background-image: none;
  height: 100%;
  width: 100%;
}

.mobile #play .doodle-screen-inner iframe {
  width: 100%;
  height: 100%;
}

.mobile #play .doodle-screen-inner {
  height: 100%;
  width: 100%;
  border-radius: 0;
}

</style>
