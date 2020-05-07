export const state =()=>({
  info:{},
  menu:[],
  subMenu:[],
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
    state.info=data.info
    state.menu=data.menu.mainMenu
    state.subMenu=data.menu.subMenu
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
    let globalInfo=await this.$axios.$get('http://106.54.232.85/wp-json/dylan-blog/v1/info')
    let menu=await this.$axios.$get('http://106.54.232.85/wp-json/dylan-blog/v1/menu')
    // let links=await this.$axios.$get('http://106.54.232.85/wp-json/dylan-blog/v1/info')
    let data={
      info:globalInfo,
      menu:menu
    }
    commit("updateGlobalInfo",data)
  }
}
