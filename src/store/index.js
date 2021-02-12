import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guestID: '',
    roomID: '',
    isAdmin: false
  },
  mutations: {
    setGuestID (state, toSet) {
      state.guestID = toSet
    },
    setRoomID (state, toSet) {
      state.roomID = toSet
    },
    setIsAdmin (state, toSet) {
      state.isAdmin = toSet
    }
  },
  getters: {
    guestID: (state) => {
      return state.guestID
    },
    roomID: (state) => {
      return state.roomID
    },
    isAdmin: (state) => {
      return state.isAdmin
    }
  },
  actions: {
    setGuestID ({ commit }, toSet) {
      commit('setGuestID', toSet)
    },
    setRoomID ({ commit }, toSet) {
      commit('setRoomID', toSet)
    },
    setIsAdmin ({ commit }, toSet) {
      commit('setIsAdmin', toSet)
    }
  }
})
