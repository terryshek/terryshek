import Vuex from 'vuex'
import axios from 'axios'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { initializeApp } from 'firebase';
import config from '../firebaseConfig'
let firebaseApp = initializeApp(config)
let db = firebaseApp.database()

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0, 
      list:[],
      img: null,
      edu: null,
      experience: null,
      personInfo: null,
      skill: null,
      contact: null,
      slider: null
    },
    mutations: {
      setData(state, payload){
        state.list = [...payload]
      },
      increment(state) {
        state.counter++
      },
      ...firebaseMutations
    },
    actions:{
      geiInitRef: firebaseAction(({ bindFirebaseRef }, key) => {
        bindFirebaseRef(key, db.ref(key)['ref'])
      }),
      async setData({ commit }) {
        const res = await axios.get(`https://api.github.com/users`)
        commit('setData', res.data)
      }
    }
  })
}

export default createStore