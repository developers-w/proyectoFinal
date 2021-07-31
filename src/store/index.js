import { createStore } from 'vuex'

export default createStore({
  state: {
    postulantes:[],
    postulante: {
      nombre: '',
      celular: '',
      email: '',
      programa: '',
      politica: [],
    },
  },
  mutations: {
  },
  actions: {
      setPostulanteAction(postulante){
        console.log(postulante)
      },
  },
  modules: {
  }
})
