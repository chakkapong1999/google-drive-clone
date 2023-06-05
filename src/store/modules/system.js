const state = {
  owner: '',
  isOpenSpinner: false,
  isCloseSpinner: true
}

const actions = {
  setOwner: ({ commit }, payload) => {
    commit('SET_OWNER', payload)
  },
  setOpenSpinner: ({ commit }) => {
    commit('SET_OPEN_SPINNER', true)
  },
  setCloseSpinner: ({ commit }) => {
    commit('SET_OPEN_SPINNER', false)
  }
}

const mutations = {
  SET_OWNER (state, payload) {
    state.owner = payload
  },
  SET_OPEN_SPINNER (state, payload) {
    state.isOpenSpinner = payload
  },
  SET_CLOSE_SPINNER (state, payload) {
    state.isOpenSpinner = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
