<template>

<div id="slider">
  <div class="film-strip">
    <div class="film-strip-inner" v-bind:style="getTransform">
      <div v-if="doodles.length > 0"
           v-for="(currentDoodle, index) in doodles"
           :key="index"
           class="film-tile">
        <router-link :to="{
           path: currentDoodle.run_date_array[0] + '/' + slugify(currentDoodle.title),
           name: 'DoodleFullscreen',
           params: {
             year: currentDoodle.run_date_array[0],
             slug: 'fullscreen-doodle',
             url: currentDoodle.standalone_html
          }}">
          <img class="lazyload" :data-src="currentDoodle.url" width="100%" height="100%"/>
        </router-link>
      </div>
    </div>
  </div>
  <div class="film-controls">
    <button @click="index -= 1"><i class="material-icons mdc-button__icon mdc-button mdc-ripple-upgraded mdc-ripple-upgraded--foreground-activation" style="--mdc-ripple-fg-size:38.3949px; --mdc-ripple-fg-scale:2.17269; --mdc-ripple-fg-translate-start:6.98539px, 0.748938px; --mdc-ripple-fg-translate-end:12.7983px, -1.20028px;">fast_rewind</i></button>
    <button @click="index += 1"><i class="material-icons mdc-button__icon mdc-button mdc-ripple-upgraded mdc-ripple-upgraded--foreground-activation" style="--mdc-ripple-fg-size:38.3949px; --mdc-ripple-fg-scale:2.17269; --mdc-ripple-fg-translate-start:6.98539px, 0.748938px; --mdc-ripple-fg-translate-end:12.7983px, -1.20028px;">fast_forward</i></button>
  </div>
</div>

</template>

<script>
import slug from 'slugify'

export default {
  name: 'DoodleSlider',
  props: ['doodles'],
  data () {
    return {
      index: this.getFirstTileIndex(),
      tileWidth: {
        type: Number,
        default: 132
      }
    }
  },
  methods: {
    slugify: function (txt) {
      return slug(txt)
    },
    getFirstTileIndex: function () {
      return Math.floor(Math.max(Math.floor(this.doodles.length / 2) - this.stripLength / 2, 0))
    }
  },
  created: function () {
    this.stripLength = 4
    if (window.matchMedia('(max-width: 800px)').matches) {
      this.stripLength = 1
    }
    if (window.matchMedia('(max-width: 400px)').matches) {
      this.stripLength = 1
    }
    this.index = this.getFirstTileIndex()
  },
  mounted: function () {
    this.tileWidth = window.innerWidth / this.stripLength
  },
  watch: {
    doodles: function (val) {
      this.index = this.getFirstTileIndex()
    }
  },
  computed: {
    getTransform: function () {
      let translate = this.tileWidth * this.index
      return `transform: translateX(-${translate}px);`
    }
  }
}
</script>

<style>
#slider {
  margin-top: 2vh;
}

.film-strip {
  background-color: rgba(255, 255,255,.4);
  padding: 15px;
  box-sizing: border-box;
  margin-left: -15px;
  margin-right: -15px;
}

.film-strip-inner {
  display: flex;
  flex-wrap: nowrap;
  transition: transform .4s ease-in-out;
}

.film-tile {
  flex: 0 0 25%;
  max-width: 25%;
  height: 15vw;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  overflow: hidden;
}

@media (max-width: 800px) {
  .film-tile {
    flex: 0 0 100%;
    max-width: 100%;
    height: 45vw;
  }
}

@media (max-width: 400px) {
  .film-tile {
    flex: 0 0 100%;
    max-width: 100%;
    height: 45vw;
  }
}

.film-tile img {
  -webkit-filter: brightness(70%);
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.film-tile img:hover {
  -webkit-filter: brightness(100%);
}

.film-strip {
  border-style: solid;
  border-width: 17px 0px;
  -moz-border-image: url(http://i.imgur.com/Sm9CNai.png) 27 repeat stretch;
  -webkit-border-image: url(http://i.imgur.com/Sm9CNai.png) 27 repeat stretch;
  -o-border-image: url(http://i.imgur.com/Sm9CNai.png) 27 repeat stretch;
  border-image: url(http://i.imgur.com/Sm9CNai.png) 27 fill repeat stretch;
}

.film-controls .mdc-button {
  font-size: 32px;
  color: #fff;
}

.film-controls button {
  background-color: transparent;
  border: 0px;
}
</style>
