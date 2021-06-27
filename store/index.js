import * as Constants from '~/assets/js/constants'

export const state = () => ({
    repositories: []
  })
  
  export const mutations = {
    SET_REPOSITORIES(state, repositories) {
      state.repositories = repositories
    }
  }

  export const actions = {
    async getRepositories({ commit }, text) {
        const data = await this.$axios.$get(`${Constants.URL_GITHUB}/search/repositories?q=${text}&page=${Constants.PAGE}&per_page=${Constants.PER_PAGE}&sort=${Constants.SORT}&order=${Constants.ORDER}`)
        commit('SET_REPOSITORIES', data.items)
    }
  }
