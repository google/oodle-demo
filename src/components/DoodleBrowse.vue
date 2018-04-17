<template>
  <div id="browse">
    <router-link to="/browse/2015">2015</router-link>
    <router-link to="/browse/2016">2016</router-link>
    <router-link to="/browse/2017">2017</router-link>
    <router-link to="/browse/2018">2018</router-link>
    <doodle-slider :doodles="doodles" v-if="doodles.length > 1"></doodle-slider>
  </div>
</template>

<script>
import DoodleSlider from '@/components/DoodleSlider'

const doodlesJsonUrl = '/static/doodles.json'

const fetchDoodles = () => (fetch(doodlesJsonUrl).then(response => response.json()))

export default {
  name: 'DoodleAll',
  data: function () {
    return {
      selectedYear: {
        type: Number,
        default: 2016
      },
      allDoodles: []
    }
  },
  computed: {
    doodles: function () {
      const selectedYear = parseInt(this.selectedYear, 10)
      return !selectedYear ? this.allDoodles : this.allDoodles.filter((el) => (
        parseInt(el.run_date_array[0], 10) === selectedYear
      ))
    }
  },
  mounted: function () {
    fetchDoodles().then((response) => {
      window.doodles = response
      this.allDoodles = response
    })
  },
  components: {
    'doodle-slider': DoodleSlider
  },
  created: function () {
    if (this.$route.params.year !== undefined) {
      this.selectedYear = this.$route.params.year
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.params.year !== from.params.year) {
        this.selectedYear = to.params.year
      }
    }
  }
}
</script>
<style>
#browse {
  text-align: center;
  margin-top: 4vh;
}

#browse .router-link-exact-active {
  text-decoration: underline;
}

</style>
