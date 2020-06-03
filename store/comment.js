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
  updateCommentOpinion(state,{index,data}){
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
    }catch (e) {}
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
  }
}
