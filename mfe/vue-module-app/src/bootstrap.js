// ★ 해당 파일은 애플리케이션의 진입 점이다.

import { createApp } from "vue";
import "./index.css";
import Sample from './components/Sample.vue';

// mount 함수
const mount = (el) => {
    const app = createApp(Sample)
    app.mount(el)
};

// #vue-module 이라는 ID를 가진 DOM 요소를 ‘root’ 변수에 할당
const root = document.querySelector("#vue-module")

if (root) { mount(root) }
export { mount }