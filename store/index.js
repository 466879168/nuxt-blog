import { UPDATE_GLOBAL_INFO,UPDATE_ERROR_MESSAGE,UPDATE_MENU_STATUS } from "./types";

export const state=()=>({
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
  }
}