import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //  嚴謹模式
  strict: process.env.NODE_ENV !== 'production',
  state: {
    show: false,
    nameList: [
      { id: 1,
        name: 'hacky',
        deleteFlag: false
      },
      { id: 2,
        name: 'OOXX',
        deleteFlag: true
      }
    ]
  },
  getters: {
    enableNameList: state => state.nameList.filter(itme => !itme.deleteFlag)
  },
  mutations: {

  },
  actions: {

  }
})
