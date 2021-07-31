<template>
  <div class="textoComunidad">
      <div class="mujer">
          <img src="../assets/mujer.png" alt="">
      </div>
      <div class="texto2" >
          <img src="../assets/texto2.png" alt="">
      </div>
  </div>
  <div class="contenedorBeneficios" >
      <h2>Beneficios</h2>
      <div class="beneficios">
          
          <img src="../assets/personas.png" alt="">
          <div class="textoBeneficio">
             <h3>titulo</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quibusdam velit dicta nobis obcaecati eum optio laudantium quae facere neque, incidunt quisquam sit minima corrupti, nam consectetur numquam porro in.</p> 
          </div>
      </div>
       <div class="beneficios">
          
          <img src="../assets/personas.png" alt="">
          <div class="textoBeneficio">
             <h3>titulo</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quibusdam velit dicta nobis obcaecati eum optio laudantium quae facere neque, incidunt quisquam sit minima corrupti, nam consectetur numquam porro in.</p> 
          </div>
      </div>
       <div class="beneficios">
          
          <img src="../assets/personas.png" alt="">
          <div class="textoBeneficio">
             <h3>titulo</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quibusdam velit dicta nobis obcaecati eum optio laudantium quae facere neque, incidunt quisquam sit minima corrupti, nam consectetur numquam porro in.</p> 
          </div>
      </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scopeed>
.textoComunidad{
    background-color: #5640FF;
    width: 1366px;
    height: 282px;
    margin-top: 159px;
    display: flex;
    justify-content: flex-start;
    

}
.mujer img{
    width: 323px;
    height: 419px;
    margin-left:-100px ;
    margin-top: -90px;
  
}
.texto2 img{
    margin-top: 60px;
}
.contenedorBeneficios{
    
    width: 1194px;
    color:#222222;
    margin: 0 auto;
    margin-top: 138px;

}

.contenedorBeneficios h2{
    text-align: left;
    margin-bottom: 32px;
}
.beneficios{
    width: 718px;
    height: 160px;
    background-color:#F8F8FA;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 30px;
}
.beneficios img{
    width: 50px;
    height: 50px;
    margin: 50px 40px 50px 40px;
}
.textoBeneficio{
    width: 538px;
    height: 57px;
    margin: 30px 0 0 30px;

}



</style>