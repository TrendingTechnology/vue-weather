<template>
  <main>
    <Header></Header>
    <Weather></Weather>
    <Footer :year="year"></Footer>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import Weather from './components/Weather.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Weather,
    Footer
  },
  data () {
    return {
      date: new Date()
    }
  },
  computed: {
    year() {
      return this.date.getFullYear()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
