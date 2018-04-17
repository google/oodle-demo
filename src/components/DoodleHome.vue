<template>
  <div id="home">
    <div class="doodle-screen">
      <div class="doodle-screen-inner">
        <img src="/static/img/oodle.png">
      </div>
    </div>

    <section class="doodle-section">
      <h2 class="doodle-section-classic">This week <router-link to="/browse" class="doodle-section-classic-link">classic doodles</router-link></h2>
    </section>

    <section class="doodle-section">
      <p class="doodle-section-featured">Featured movie <router-link to="/offline-games/" class="doodle-section-featured-link">pony express</router-link></p>
    </section>
  </div>
</template>

<script>
const doodlesJsonUrl = '/static/doodles.json'

const fetchDoodles = () => (fetch(doodlesJsonUrl).then(response => response.json()))

export default {
  name: 'DoodleCarousel',
  data: () => ({
    'doodles': [{
      'title': 'Test Doodle',
      'standalone_html': '',
      'url': ''
    }]
  }),
  mounted: function () {
    fetchDoodles().then((response) => {
      this.doodles = response
    })
  }
}
</script>

<style lang="scss">
$film-strip-width: 20px;

#home {
  height: 100%;
  position: absolute;
  width: 100%;
}

#home .doodle-screen {
  background-image: url('/static/img/screen.png');
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 60%;
}

#home .doodle-screen-inner img {
  width: 80%;
  max-width: 430px;
}

#home .doodle-screen-inner {
  // height: 74.7%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.landscape.mobile #home .doodle-screen {
  height: 50%;
}

.landscape #home .doodle-screen-inner img {
  max-height: 20vh;
  width: auto;
}

#home .doodle-section {
  background-image: url(/static/img/film_strip_single.png);
    background-position: 0 100%;
    background-repeat: repeat-x;
    margin: 10px auto;
    line-height: 2em;
    max-width: 700px;
    padding-bottom: 30px;
}

#home .doodle-section-classic {
  color: #d6d6d6;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 100;
  text-transform: uppercase;
}

#home .doodle-section-classic-link {
  font-weight: 600;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
}

#home .doodle-section-featured {
  font-family: 'Teko', sans-serif;
  font-size: 1.4rem;
  font-weight: 100;
  text-transform: uppercase;
}

#home .doodle-section-featured-link {
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1;
  vertical-align: middle;
}
</style>
