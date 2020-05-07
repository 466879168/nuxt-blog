export const state =()=>({
  info:{},
  menu:{},
  subMenu:{},
  link:[],
  errorInfo:{
    code:null,
    message:null
  },
  menuStatus:false
})

export const mutations={
  updateGlobalInfo(state,data){
    console.log(data)
    state.info=data
    // state.menu=data.menu
    // state.subMenu=data.subMenu
    // state.links=data.links
  },

  updateErrorMessage(state,data){
    console.log(data)
    state.errorInfo=data
  },

  updateMenuStatus(state,flag){
    console.log(flag)
    state.menuStatus=flag
  }
}

export const actions={
  async nuxtServerInit({commit}){
    let data=await this.$axios.$get('http://106.54.232.85/wp-json/dylan-blog/v1/info')
    commit("updateGlobalInfo",data)
  }
}
