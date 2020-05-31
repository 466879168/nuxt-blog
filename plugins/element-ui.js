import Vue from 'vue'
import { 
  Input,
  Button,
  Pagination,
  Image,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Pagination);
Vue.use(Input);
Vue.use(Button);
Vue.use(Image);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
