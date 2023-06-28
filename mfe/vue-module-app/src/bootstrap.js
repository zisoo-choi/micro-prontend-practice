// ★ 해당 파일은 애플리케이션의 진입 점이다.

import { createApp } from "vue";
import "./index.css";
import Sample from './domain/Sample.vue';
import store from './store'
import router from './router'

// mount 함수
const mount = (el) => {
    // ★ el 매개변수에는 vue 애플리케이션을 마운트(연결)할 DOM 요소 (태그)가 전달된다.
    const app = createApp(Sample).use(store).use(router)
    // mount 함수와 동일한 것이 아니다.
    // 해당 mount는 app 객체의 mount 메서드를 호출하는 것이다.
    // 이 mount 메서드는 애플리케이션을 지정한 DOM 요소에 마운트 하는 역할이다.
    app.mount(el)
};

// #vue-module 이라는 ID를 가진 DOM 요소를 ‘root’ 변수에 할당
const root = document.querySelector("#vue-module")

if (root) { mount(root) }
export { mount }