<template>
  <div class="application" v-bind:class="{landscape, mobile}">
    <div class="application-content">
      <div class="application-content-inner">
        <header class="doodle-header">
          <h1 class="doodle-heading" >
            <router-link to="/">Oodle Theater</router-link>
          </h1>
        </header>
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
    <div class="application-footer" v-if="!(mobile && landscape)">
      <p class="doodle-footer-content">For more, see <svg class="doodle-inline-icon" aria-hidden="true" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> or <a href="https://google.com/doodles">google.com/doodles</a></p>
    </div>
  </div>
</template>

<script>
import './theme.scss'

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
  margin-top: 30px;
}

.doodle-inline-icon {
  display: inline-block;
  width: 1em;
  vertical-align: middle;
}

@media (max-height: 450px) {
  .doodle-heading {
    font-size: 2rem;
  }
}

</style>
