<template>
  <div id="app">
    <!-- <Dashboard v-if="settings == true" /> -->
    {{ userData.data["-NQ2LTTEHzCg0if-ASjW"] }}
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
//import Dashboard from './components/Dashboard.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // Dashboard
  },
  data() {
    return {
      settings: false,
      userData:{}
    }
  },
  mounted() {
    console.log("I am in mounted!!!")
    this.settings = true
  },
  setup() {
    console.log("I am in setup!!!")
  },
  async created(){
    this.userData = await axios.get('http://localhost:3000/users')
  }
}
</script>

<style scoped></style>
