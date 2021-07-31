<template>
<div class="fondo">
  <!-- <img src="../assets/portada.png" alt="fondo"> -->
<div class="safe">
    <div class="portada">
        <div class="nav">
          <div class="logo">
            <img src="../assets/logo.png" alt="" />
          </div>
          <div>
            <div class="carrito">
              <img src="../assets/carrito.png" alt="" />
              <p  >{{contador}}</p>
            </div>
            <div class="hamburgueza"></div>
          </div>
        </div>

        <div class="texto">
          <h1>¡Explotatodo tu potencial <br>
            tecnológico!
          </h1>
          <p>Con nuestros programas de especialización </p>
        </div>
    </div>
    <div class="logo2">
      <img  src="../assets/logo2.png" alt="">
      <img class="flecha" src="../assets/flechaAbajo.png" alt="">
    </div> 
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      contador:0
    }
  },
};
</script>

<style scoped>
 .fondo{
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/portada.png");
  background-size: 100% 500px;
  background-repeat: no-repeat; 
}
.safe {
  width: 1194px;
  min-height: 100vh;
  margin: 0 auto;
  font-family: Poppins;

 
}
.portada{
  
  width: 100%;
  height: 500px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;  

}

.nav {
  width: 100%;
  height: 32px;
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
}
.carrito{
  position: relative;

}
.carrito p{
  width: 20px;
  height: 20px;
  
  text-align: center;
border: 1px solid #5640FF;
background-color: #5640FF;
border-radius: 50%;
font-size: 10px;
position: absolute;
top: -5px;
right: 0;

}
.texto {
  height: 215px;
  font-size: 22pt;
  text-align: left;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 82px;
}
.logo img {
  width: 184px;
  height: 32px;
}
.carrito img {
  width: 28px;
  height: 26px;
}


.texto p {
  font-weight: 500;
  font-size: 20px;
  
 
}
.texto h1{
  margin: 0;
  font-size: 54px;
  font-weight: bold;
}
.logo2{
    display: flex;
    justify-content: flex-start;
    width: 570px;
    height: 160px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
}
.logo2 img {
  width: 232px;
  height: 64px;
}
.logo2 .flecha{
    width: 50px;
    height: 50px;
}

</style>