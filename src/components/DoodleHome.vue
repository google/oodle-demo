<template>
  <div id="home">
    <div class="doodle-screen">
      <div class="doodle-screen-inner">
        <div v-if="connection === 'fast'">
          <!-- 1.3MB -->
          <!-- ffmpeg -i doodle-theatre.mp4 -b:v 0 -crf 40 -vf scale=600:-1 output-2.mp4 -->
          <video class="theatre" autoplay muted playsinline control>
            <source src="/static/img/doodle-theatre.webm" type="video/webm">
            <source src="/static/img/doodle-theatre.mp4" type="video/mp4">
          </video>
        </div>
        <!-- 24MB same resolution, no audio -->
        <!-- <img class="theatre" src="http://res.cloudinary.com/ddxwdqwkr/video/upload/c_scale,w_600/v1524282226/doodle-theatre_es8oc9.gif"/> -->
        <div v-if="connection === 'slow'">
          <img class="theatre" src="/static/img/doodle-theatre-poster.jpg">
        </div>
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
const lowfi = ['slow-2g', '2g', '3g']

const fetchDoodles = () => (fetch(doodlesJsonUrl).then(response => response.json()))

export default {
  name: 'DoodleCarousel',
  data: () => ({
    'doodles': [{
      'title': 'Test Doodle',
      'standalone_html': '',
      'url': ''
    }],
    connection: '2g'
  }),
  mounted: function () {
    fetchDoodles().then((response) => {
      this.doodles = response
    })
    if (navigator.connection && navigator.connection.effectiveType.length > 0) {
      if (lowfi.indexOf(navigator.connection.effectiveType) >= 0) {
        this.connection = 'slow'
      } else {
        this.connection = 'fast'
      }
    } else {
      // Hotfix: allow faster mode for some tablet devices that
      // don't support navigator.connection, but still support falling
      // back to slow mode for the majority.
      if (window.screen.height / window.screen.width === 1366 / 1024) {
        this.connection = 'fast'
      } else if (window.screen.height / window.screen.width === 1112 / 834) {
        this.connection = 'fast'
      } else {
        this.connection = 'slow'
      }
    }
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
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 60%;
}

#home .doodle-screen-inner .theatre {
  width: 87%;
  max-width: 430px;
  border-radius: 40px;
  border: 13px solid #d8d5d1;
  box-shadow: 0 10px 40px -6px #000;
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

.landscape #home .doodle-screen-inner .theatre {
  max-height: 38vh;
  width: auto;
  max-width: 554px;
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
