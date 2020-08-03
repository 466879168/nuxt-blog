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
    console.log(data)
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
  },
  // 上传图片
  async uploadImage ({commit,rootState},{requestData, config = {}}){
    try {
      let { data } = await this.$axios.$post(`${process.env.baseUrl}/wp-content/themes/${rootState.info.themeDir}/dylan_upload.php`, requestData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          progress: false
        },
        ...config
      })
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  },

  // 删除图片
  async deleteImage ({ commit, rootState }, requestData) {
    try {
      let { data } = await this.$axios.$post(`${process.env.baseUrl}/wp-content/themes/${rootState.info.themeDir}/dylan_upload.php`, requestData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          progress: false
        }
      })
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
