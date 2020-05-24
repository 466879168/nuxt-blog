import Vue from "vue"
import moment from "moment"
import * as filters from "@/utils/filters"
import globalMixin from "@/mixin/global"

export default ({app}) =>{
  Vue.prototype.$moment=moment

  Object.keys(filters).forEach(key=>{
    Vue.filter(key,filters[key])
  })

  Vue.mixin(globalMixin)
}