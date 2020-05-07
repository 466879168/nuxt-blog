export const actions={
  //获取基本信息
async getUserInfo(context,params){
  let globalInfo=await this.$axios.get('/dylan-blog/v1/info')
  // let menu=await this.$axios.get('/dylan-blog/v1/menu')
  // let links=await this.$axios.get('/dylan-blog/v1/get-links?type=home')
  let result={
    info:globalInfo,
    // menu:menu.mainMenu,
    // subMenu:menu.subMenu,
    // links:links
  }
  return result
},
}



