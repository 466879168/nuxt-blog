export const state=()=>({
  articleList:[],
  detail:{},
  total:0,
  currentPage:1,
  viewCount:0,
  opinion:{}

})

export const mutations={
  updataArticleList(state,data){
    state.articleList=data
  },
  setArticleDetail(state,data){
    state.detail=data
  },
  setTotal(state,num){
    state.total=num
  },
  setCurrentPage(state,num){
    state.currentPage=num
  },
  updateViewCount(state,num){
    state.viewCount=num
  },
  updataOpinion(state,data){
    Object.keys(state.opinion).map(key=>{
      state.opinion[key].data=data[key]
    })
  },
  updataOpinionLoading(state,{key,flag}){
    state.opinion[key].isShowLoading=flag
  }
}

export const actions={
  //获取文章列表
  async getArticleList({rootState,commit},requestData){
    try {
      // let {data,header}=await this.$axios.$get("http://106.54.232.85/wp-json/wp/v2/posts",{
      //   params:requestData,
      //   data:{progress:false}
      // })
      let  data = await this.$axios.$get("http://106.54.232.85/wp-json/wp/v2/posts", {
        params: requestData,
        data: { progress: false }
      })
      data.map(item=>{
        item.articleInfor.thumbnail=item.articleInfor.thumbnail?item.articleInfor.thumbnail.replace(/https?:\/\/(\w+\.)+\w+(:\d+)?/, ''):rootState.info.thumbnail
        item.date=item.date.replace("T", " ")
        commit("updataArticleList",data)
        // commit("setTotal",+headers['x-wp-total'])
        return Promise.resolve(data)
      })
    }catch (e) {
      return Promise.reject(e)
    }
  }
}
