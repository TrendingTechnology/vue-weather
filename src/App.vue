<template>
  <main id='app'>
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
body{
  background-color: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-fluid {
    width: 100%;
}
.container {
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
}
.text-left {text-align: left}
.text-center {text-align: center}
.text-right {text-align: right}

.bg-info {background: rgb(7, 218, 189)}
.bg-success {background: rgb(13, 199, 13)}
.bg-warning {background: rgb(248, 232, 9)}
.bg-danger {background: rgb(219, 12, 40)}
.bg-light {background: #f5f5f5}
.bg-white {background: #ffffff}
.bg-dark {background: black}

.text-info {color: rgb(7, 218, 189)}
.text-success {color: rgb(13, 199, 13)}
.text-warning {color: rgb(248, 232, 9)}
.text-danger {color: rgb(219, 12, 40)}
.text-light {color: #f5f5f5}
.text-white {color: #ffffff}
.text-secondary {color: darkgray}
.text-dark {color: black}
</style>
