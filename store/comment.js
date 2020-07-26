import getBrowserInfo from "dylan-browser-info"
export const state=()=>({
  commentList:[],
  total:0
})

export const mutations={
  setCommentList(state,data){
    state.commentList=[...state.commentList,...data]
  },
  resetComment(state){
    state.commentList=[]
    state.total=0
  },
  setCommentTotal(state,n){
    state.total=n
  },
  updateComment(state,data){
    state.commentList.unshift(data)
  },
  updataCommentOpinion(state,{index,data}){
    state.commentList[index].meta.opinion=data
  }
}

export const actions={
  //获取评论列表
  async getCommentList({commit},requestData){
    try {
      let {data,headers}=await this.$axios.$get(`${process.env.baseUrl}/wp-json/wp/v2/comments`,{
        params:requestData,
        data:{progress:false}
      })
      data.map(item=>{
        item.userAgent=getBrowserInfo(item.userAgentInfo.userAgent)
      })
      commit('setCommentList',data)
      commit('setCommentTotal',+headers['x-wp-totalpages'])
      return Promise.resolve(data)
    }catch (e) {
      return Promise.reject(e)
    }
  },
  //提交评论
  async updateComment({commit},requestData){
    try {
      let {data}=await this.$axios.$post(`${process.env.baseUrl}/wp-json/wp/v2/comments`,requestData,{
        headers:{
          progress:false
        }
      })
      return Promise.resolve(data)
    }catch (e) {
      return Promise.reject(e)
    }
  },
  //评论列表点赞
  async updateCommentOpinion({comit},requestData){
    try {
        let {data} = await this.$axios.$post(`${process.env.baseUrl}/wp-json/xm-blog/v1/update-comment-meta`,requestData,{
          headers:{
            progress: false
          }
        })
      return data.success?Promise.resolve(data.data):Promise.reject(new Error('请求异常！'))
    }catch (e) {
      return Promise.reject(e)
    }
  }
}
