const state =  {
    user: {email: "", password: ""}
}


const getters = {

}

const mutations = {
    LOGIN_PAGE(state, payload) {
        state.user.payload.email = payload.email
        state.user.payload.password = payload.password
        
    }   
}

const actions  = {
    signin(context, payload) {
          context.commit( 'LOGIN_PAGE', payload)
      }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}