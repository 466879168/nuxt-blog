export const state = () => ({
  articleList: [],
  detail: {},
  total: 0,
  currentPage: 1,
  viewCount: 0,
  opinion: {}
});

export const mutations = {
  updataArticleList(state, data) {
    state.articleList = data;
  },
  setArticleDetail(state, data) {
    state.detail = data;
  },
  setTotal(state, num) {
    state.total = num;
  },
  setCurrentPage(state, num) {
    state.currentPage = num;
  },
  updateViewCount(state, num) {
    state.viewCount = num;
  },
  updataOpinion(state, data) {
    Object.keys(state.opinion).map(key => {
      state.opinion[key].data = data[key];
    });
  },
  updataOpinionLoading(state, { key, flag }) {
    state.opinion[key].isShowLoading = flag;
  }
};

export const actions = {
  //获取文章列表
  async getArticleList({ rootState, commit }, requestData) {
    try {
      let { data, headers } = await this.$axios.$get(
        `${process.env.baseUrl}//wp-json/wp/v2/posts`,
        {
          params: requestData,
          data: { progress: false }
        }
      );
      data.map(item => {
        // item.articleInfor.thumbnail = item.articleInfor.thumbnail
        //   ? item.articleInfor.thumbnail.replace(/https?:\/\/(\w+\.)+\w+(:\d+)?/, "") : rootState.info.thumbnail;
        // item.date = item.date.replace("T", " ");
        commit("updataArticleList", data);
        commit("setTotal", +headers["x-wp-total"]);
      });
      commit("updataArticleList", data);
      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  //获取文章详情
  async getArticleDetail({ commit, rootState }, id) {
    try {
      const domainRegexp = /(https?:\/\/([a-z\d-]\.?)+(:\d+)?)?(\/.*)/gi;
      let { data } = await this.$axios.$get(
        `${process.env.baseUrl}/wp-json/wp/v2/posts/${id}`,
        {
          data: { progress: false }
        }
      );
      data.date = data.date.replace("T", " ");
      data.articleInfor.other.authorPic = data.articleInfor.other.authorPic.replace(
        domainRegexp,
        "$4"
      );
      data.articleInfor.thumbnail = data.articleInfor.thumbnail
        ? data.articleInfor.thumbnail.replace(domainRegexp, "$4")
        : rootState.info.thumbnail
      commit("setArticleDetail",data)
      commit("updataOpinion",data.articleInfor.xmLike)
      return Promise.resolve(data)
    } catch (e) {
      return Promise.reject(e);
    }
  },
  //更新阅读量
  async updateArticleViewCount({commit},requestData){
    try {
      let { data } = await this.$axios.$post(`${process.env.baseUrl}/wp-json/xm-blog/v1/view-count`, requestData, {
        headers: {
          progress: false
        }
      })
      commit("updateViewCount", data)
    }catch (e) {
      return Promise.reject(e)
    }
  }
};
