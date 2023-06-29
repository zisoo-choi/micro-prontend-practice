// 그냥 붙여오기만 한 페이지, 여기부터 수정해야 함
import { createApp } from "vue";
import "./index.css";

import Sample from './domain/Sample.vue';
import store from './store'
import router from './router'

const mount = (el) => {
    const app = createApp(Sample).use(store).use(router)
    app.mount(el)
};

const root = document.querySelector("#vue-navigation")

if (root) { mount(root) }
export { mount }