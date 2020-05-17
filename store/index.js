export const state =()=>({
  info:{},
  menu:[],
  subMenu:[],
  links:[],
  errorInfo:{
    code:"",
    message:""
  },
  menuStatus:false
})

export const mutations={
  updateGlobalInfo(state,data){
    state.info=data.info
    state.menu=data.menu.mainMenu
    state.subMenu=data.menu.subMenu
    // state.subMenu=data.subMenu
    // state.links=data.links
  },

  updateErrorMessage(state,data){
    state.errorInfo=data
  },

  updateMenuStatus(state,flag){
    state.menuStatus=flag
  }
}

export const actions={
  async nuxtServerInit({commit}){
    let globalInfo=await this.$axios.$get(`${process.env.baseUrl}/wp-json/dylan-blog/v1/info`)
    let menu=await this.$axios.$get(`${process.env.baseUrl}/wp-json/dylan-blog/v1/menu`)
    // let links=await this.$axios.$get
    let data={
      info:globalInfo.data,
      menu:menu.data
    }
    commit("updateGlobalInfo",data)
  }
}
