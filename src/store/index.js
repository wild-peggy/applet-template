import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import home from './modules/home'
import * as service from '../service/index.service'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    baseApi: process.env.VUE_APP_BASE_API,
    userInfo: '', // 用户信息
    userAddress: '' //用户地址
  },
  mutations: {
    changeLoginStatus(state, payload) {
      state.isLogin = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setUserAddress(state, payload) {
      state.userAddress = payload
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      const res = await service.getUserInfo()
      if (res) {
        commit('setUserInfo', res.data)
      }
    },
    async getUserAddress({ commit }, params) {
      const res = await service.getUserAddress(params)
      if (res) {
        commit('setUserAddress', res.data)
      }
    }
  },
  modules: {
    login,
    home
  }
})

export default store
