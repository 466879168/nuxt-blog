export const actions={
  //获取文章列表
  async getArticleList(content,params){
    let {data} =await this.$axios.$get("http://106.54.232.85/wp-json//wp/v2/posts")
    return data
  }

}



