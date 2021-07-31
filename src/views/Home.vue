<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <Portada/> 
        <Cursos/>
        <Beneficios/>
        <Footer/>
        <Postula/>
        
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Portada from '../components/Portada.vue';
import Cursos from '../components/Cursos.vue';
import Beneficios from '../components/Beneficios.vue';
import Footer from '../components/Footer.vue';
import Postula from '../components/Postula.vue';
import Menu from '../components/Menu.vue';


export default {
  name: 'Home',
  components: {
    // HelloWorld
    Portada,
    Cursos,
    Beneficios,
    Footer,
    Postula,
    Menu,
  }
}
</script>
