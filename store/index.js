import { UPDATE_GLOBAL_INFO,UPDATE_ERROR_MESSAGE,UPDATE_MENU_STATUS } from "./types";

export const state =()=>({
  info:{},
  menu:{},
  subMenu:{},
  links:[],
  errorInformation:{
    code:"",
    message:""
  },
  menuStatus:false
})

export const mutations={
  [UPDATE_GLOBAL_INFO](state,{info,menu,subMenu,links}){
    state.info=info
    state.menu=menu
    state.subMenu=subMenu
    state.links=links
  },
  [UPDATE_ERROR_MESSAGE](state,data){
    state.errorInformation=data
  },
  [UPDATE_MENU_STATUS](state,flag){
    state.menuStatus=flag
  }
}

export const actions={
  //获取公共信息
  async serverInit({commit}){
    try {
      let {data:globalInfo}=await this.$axios.$get(`${process.env.baseUrl}/wp-json/dylan-blog/v1/info`)
      let {data:menu}=await this.$axios.$get(`${process.env.baseUrl}/wp-json/dylan-blog/v1/menu`)
      let {data:links}=await this.$axios.$get(`${process.env.baseUrl}/wp-json/dylan-blog/v1/menu`)
      let result ={
        info:globalInfo,
        menu:menu.mainMenu,
        subMenu:menu.subMenu,
        links
      }
      commit(UPDATE_GLOBAL_INFO,result)
      return Promise.resolve(result)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}