<template>
  <div class="application" v-bind:class="{landscape, mobile}">
    <div class="application-content">
      <div class="application-content-inner">
        <header class="doodle-header">
          <h1 class="doodle-heading" >
            <router-link to="/">Google I/O presents</router-link>
          </h1>
        </header>
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
    <div class="application-footer" v-if="!(mobile && landscape)">
      <p class="doodle-footer-content">Check on <i class="fab fa-github"></i></p>
    </div>
  </div>
</template>

<script>
import './theme.scss'
// import 'vue-mdc-adapter/dist/styles.scss'
import Vue from 'vue'
import VueMDCAdapter from 'vue-mdc-adapter'
Vue.use(VueMDCAdapter)

export default {
  name: 'App',
  data: function () {
    return {
      mobile: this.isMobile(),
      landscape: this.isLandscape()
    }
  },
  methods: {
    isMobile: function () {
      return Math.min(window.innerWidth, window.innerHeight) <= 700
    },
    isLandscape: function () {
      return ((window.screen.orientation &&
              window.screen.orientation.type.indexOf('landscape') >= 0) ||
              (window.innerWidth > window.innerHeight))
    }
  },
  created: function () {
    window.addEventListener('resize', () => {
      this.mobile = this.isMobile()
      this.landscape = this.isLandscape()
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  background-color: #262829;
  color: #fff;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}

.application {
  color: #ccc;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  height: 100%;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.application-content {
  overflow: hidden;
  background-image: linear-gradient(0deg, transparent 50%, #2c2e2e 50%), linear-gradient(10deg, transparent 50%, #535353 50%), linear-gradient(20deg, transparent 50%, #2c2e2e 50%), linear-gradient(30deg, transparent 50%, #535353 50%), linear-gradient(40deg, transparent 50%, #2c2e2e 50%), linear-gradient(50deg, transparent 50%, #535353 50%), linear-gradient(60deg, transparent 50%, #2c2e2e 50%), linear-gradient(70deg, transparent 50%, #535353 50%), linear-gradient(80deg, transparent 50%, #2c2e2e 50%), linear-gradient(90deg, transparent 50%, #535353 50%), linear-gradient(100deg, transparent 50%, #2c2e2e 50%), linear-gradient(110deg, transparent 50%, #535353 50%), linear-gradient(120deg, transparent 50%, #2c2e2e 50%), linear-gradient(130deg, transparent 50%, #535353 50%), linear-gradient(140deg, transparent 50%, #2c2e2e 50%), linear-gradient(150deg, transparent 50%, #535353 50%), linear-gradient(160deg, transparent 50%, #2c2e2e 50%), linear-gradient(170deg, transparent 50%, #535353 50%), linear-gradient(180deg, transparent 50%, #2c2e2e 50%), linear-gradient(190deg, transparent 50%, #535353 50%), linear-gradient(200deg, transparent 50%, #2c2e2e 50%), linear-gradient(210deg, transparent 50%, #535353 50%), linear-gradient(220deg, transparent 50%, #2c2e2e 50%), linear-gradient(230deg, transparent 50%, #535353 50%), linear-gradient(240deg, transparent 50%, #2c2e2e 50%), linear-gradient(250deg, transparent 50%, #535353 50%), linear-gradient(260deg, transparent 50%, #2c2e2e 50%), linear-gradient(270deg, transparent 50%, #535353 50%), linear-gradient(280deg, transparent 50%, #2c2e2e 50%), linear-gradient(290deg, transparent 50%, #535353 50%), linear-gradient(300deg, transparent 50%, #2c2e2e 50%), linear-gradient(310deg, transparent 50%, #535353 50%), linear-gradient(320deg, transparent 50%, #2c2e2e 50%), linear-gradient(330deg, transparent 50%, #535353 50%), linear-gradient(340deg, transparent 50%, #2c2e2e 50%), linear-gradient(350deg, transparent 50%, #535353 50%), linear-gradient(360deg, transparent 50%, #2c2e2e 50%);
  position: relative;
  background-repeat: no-repeat;
  background-color: #2c2e2e;
  border-radius: initial;
  height: 80%;
}

.landscape.mobile .application-content {
  height: 100%;
}

.application-content::after,
.application-content::before {
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}

.application-content::before {
    background-image: linear-gradient(180deg, transparent 50%, #2c2e2e 50%), linear-gradient(190deg, transparent 50%, #535353 50%), linear-gradient(200deg, transparent 50%, #2c2e2e 50%), linear-gradient(210deg, transparent 50%, #535353 50%), linear-gradient(220deg, transparent 50%, #2c2e2e 50%), linear-gradient(230deg, transparent 50%, #535353 50%), linear-gradient(240deg, transparent 50%, #2c2e2e 50%), linear-gradient(250deg, transparent 50%, #535353 50%), linear-gradient(260deg, transparent 50%, #2c2e2e 50%), linear-gradient(270deg, transparent 50%, #535353 50%), linear-gradient(280deg, transparent 50%, #2c2e2e 50%), linear-gradient(290deg, transparent 50%, #535353 50%), linear-gradient(300deg, transparent 50%, #2c2e2e 50%), linear-gradient(310deg, transparent 50%, #535353 50%), linear-gradient(320deg, transparent 50%, #2c2e2e 50%), linear-gradient(330deg, transparent 50%, #535353 50%), linear-gradient(340deg, transparent 50%, #2c2e2e 50%), linear-gradient(350deg, transparent 50%, #535353 50%), linear-gradient(360deg, transparent 50%, #2c2e2e 50%);
    background-repeat: no-repeat;
    background-color: #2c2e2e;
    border-radius: initial;
  }
.application-content::after {
    background-image: linear-gradient(0deg, transparent 50%, #2c2e2e 50%), linear-gradient(10deg, transparent 50%, #535353 50%), linear-gradient(20deg, transparent 50%, #2c2e2e 50%), linear-gradient(30deg, transparent 50%, #535353 50%), linear-gradient(40deg, transparent 50%, #2c2e2e 50%), linear-gradient(50deg, transparent 50%, #535353 50%), linear-gradient(60deg, transparent 50%, #2c2e2e 50%), linear-gradient(70deg, transparent 50%, #535353 50%), linear-gradient(80deg, transparent 50%, #2c2e2e 50%), linear-gradient(90deg, transparent 50%, #535353 50%), linear-gradient(100deg, transparent 50%, #2c2e2e 50%), linear-gradient(110deg, transparent 50%, #535353 50%), linear-gradient(120deg, transparent 50%, #2c2e2e 50%), linear-gradient(130deg, transparent 50%, #535353 50%), linear-gradient(140deg, transparent 50%, #2c2e2e 50%), linear-gradient(150deg, transparent 50%, #535353 50%), linear-gradient(160deg, transparent 50%, #2c2e2e 50%), linear-gradient(170deg, transparent 50%, #535353 50%), linear-gradient(180deg, transparent 50%, #2c2e2e 50%);
    background-repeat: no-repeat;
    background-color: #2c2e2e;
    border-radius: initial;
    top: 50% !important;
    border-radius: 0% !important;
    background-position: 0 100%;
    background-size: 100% 200%;
}

.application-content-inner {
    position: relative;
    z-index: 1;
}

.application-content-inner {
  background-image: radial-gradient(ellipse at center, rgba(125,185,232,0) 0%, rgba(124,183,230,0) 30%, rgba(0,0,0,1) 100%);
  height: 100%;
}

.application-footer {
  background-image: url('/static/img/seats.png');
  background-repeat: repeat-x;
  background-size: auto 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
}

.doodle-header {
  height: 12%;
  text-align: center;
}

.doodle-heading {
  color: #fff;
  display: inline-block;
  font-size: 2.9rem;
  font-family: 'Teko', sans-serif;
  font-weight: 300;
  padding: 0 4.89vw;
  text-transform: uppercase;
}

@media (max-height: 450px) {
  .doodle-heading {
    font-size: 2rem;
  }
}

</style>
