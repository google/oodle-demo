<template>
  <div id="offline">
    <div class="doodle-screen">
      <div class="doodle-screen-inner">
        <iframe src="/static/ponyexpress15.htm" frameborder="0"  scrolling="no" height="510px" width="800px" ></iframe>
      </div>
    </div>
    <section class="doodle-info-link" @click="showModal = true">
      <p><i class="material-icons">info</i> Learn more</p>
    </section>

    <div class="modal" v-show="showModal">
      <section class="doodle-section">
        <i class="material-icons" @click="showModal = false">close</i>
      </section>
      <section class="doodle-section">
        <p class="doodle-section-featured">Featured movie <router-link to="/offline-games/" class="doodle-section-featured-link">pony express</router-link></p>
      </section>
      <section class="doodle-text">
        <p>We were so excited to share this doodle that we asked a friend of the team, animator <a href="//www.nateswinehart.com">Nate Swinehart</a>, to tell a bit more about the history of the Pony Express and document the doodle process.</p>
        <p><iframe frameborder="0" height="315" src="https://www.youtube.com/embed/doAgWNekqk0" width="560"></iframe></p>
        <p>The notion of triumph through adversity is so inspirational. So when William H.Russell, Alexander Majors &amp; William B Waddell founded the Pony Express on April 3rd, 1860, they set in motion a wonderful yet daunting method of communication. What a concept–riders with letters on horseback racing from California to Missouri and vice versa to deliver mail on time! True to their word, the first mail arrived on April 14th. The Pony Express felt like a great game concept to us at Google. We've made time-based games in the past so our new idea was simple. Collect letters, avoid obstacles and aim for the ultimate 100 letter delivery! We know everyone is busy these days but the Pony Express needs YOU. And ultimately, whatever happens in life, what's more important than earning trust and respect from a horse?</p>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DoodleOffline',
  data: function () {
    return {
      showModal: false
    }
  }
}
</script>
<style>
#offline {
  height: 100%;
}

#offline .doodle-screen {
  background-image: url('/static/img/screen.png');
  background-size: 600px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#offline .doodle-screen-inner iframe {
  width: 430px;
  margin-top: 20px;
}

#offline .doodle-screen-inner {
    height: 100%;
    width: 510px;
    border-radius: 25px;
    height: 290px;
    overflow: hidden;
}

.mobile #offline .doodle-screen {
  background-image: none;
  height: 100%;
  width: 100%;
}

.mobile #offline .doodle-screen-inner iframe {
  height: 100%;
  min-height: 240px;
}

.mobile #offline .doodle-screen-inner {
  height: 100%;
  width: 100%;
  border-radius: 0;
}

#offline .modal {
  position: fixed;
  top: 0;
  padding: 2em;
  background: rgba(0, 0, 0, 0.85);
  height: 100%;
  overflow-y: scroll;
  text-align: left;
  margin: 0 3vw;
  max-width: calc(100% - 6vw);
}

#offline .modal iframe {
  width: 100%;
}

#offline .doodle-text p {
  margin: 1em 0;

}

#offline .doodle-section {
  background-image: url(/static/img/film_strip_single.png);
  background-position: 0 100%;
  background-repeat: repeat-x;
  margin: 10px 0;
  line-height: 2em;
  padding-bottom: 30px;
}

#offline .doodle-section-classic {
  color: #d6d6d6;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
}

#offline .doodle-section-classic-link {
  font-weight: 600;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
}

#offline .doodle-section-featured {
  font-family: 'Teko', sans-serif;
  font-size: 1.4rem;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
}

#offline .doodle-section-featured-link {
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1;
  vertical-align: middle;
}

#offline .material-icons {
  vertical-align: middle;
}

#offline .doodle-info-link {
  margin: 1em;
}
</style>
