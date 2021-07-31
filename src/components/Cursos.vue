<template>
  <div class="cursos">
    <h2>Conoce nuestros Programas de Especialización</h2>
    <div class="contenedorCursos">
      <div class="itemCurso">
        <img src="../assets/curso.png" alt="" />

        <h2>nombre curso</h2>
        <div>
          <button>+</button>
          <a href=""> Ver más</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
       async getCursos(){
           const data= await fetch('https://thawing-stream-82830.herokuapp.com/app/cursos')  
           const info=  await data.json();
           console.log(info);
       }

    },
    created() {
        this.getCursos();
    },
};
</script>

<style scoped>
.cursos {
  width: 1194px;
  padding-top: 80px;
  margin: 0 auto;

}
.cursos > h2 {
  text-align: left;
  color: #000425;
  margin-bottom: 32px;
}
.contenedorCursos {
  width: 720px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.itemCurso {
  width: 343px;
  height: 320px;
  margin-bottom: 40px;
  position: relative;
  /* display: flex;
    justify-content: space-around;
    align-items: flex-end; */
}

.itemCurso img {
  width: 100%;
  filter: brightness(0.7);
}
/* .itemCurso img:before{
position: absolute;
        top: 0;
	bottom: 0;
	left: 0;
	right: 0;
  background-color: rgba(0,0,0,0.6);

} */
.itemCurso h2 {
  position: absolute;
  bottom: 69px;
  left: 20px;
  margin-bottom: 0;
  display: flex;
}
.itemCurso div {
  position: absolute;
  bottom: 20px;
  right: 28px;
}
.itemCurso div button {
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: transparent;
}
</style>