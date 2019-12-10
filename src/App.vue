<template>
  <div id="app" class="container">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
//import { eventBus } from './main'
import Header from './components/Header'
import Footer from './components/Footer'
export default{
  name: 'app',
  components: {
    Header,
    Footer
  },
  
  // data(){
  //   return {
  //     users: []
  //   }
  // },
  // mounted(){
  //   this.users = users;
  //   // notify that users have been loaded
  //   eventBus.$emit('users-loaded', this.users);

  // }
}
</script>
<style>

@import '../src/assets/css/bootstrap.min.css';
@import '../src/assets/css/style.css';

</style>

