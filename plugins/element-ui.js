import Vue from 'vue'
import { 
  Input,
  Button,
  Pagination,
  Image,
  Form,
  FormItem,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Pagination);
Vue.use(Input);
Vue.use(Button);
Vue.use(Image);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
