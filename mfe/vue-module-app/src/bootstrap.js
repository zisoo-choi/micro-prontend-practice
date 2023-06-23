/*
    Vue에서 createApp 함수를 가져온다.
    해당 함수를 사용하여 vue 애플리케이션 인스턴스를 생성할 수 있다.
*/
import { createApp } from "vue";

// 모듈의 스타일을 정의하는 파일을 가져온다.
import "./index.css";

// Sample은 모듈 내에서 사용될 Vue 컴포넌트로 추정된다.
import Sample from './components/Sample.vue';

/*
    mount 함수를 선언한다.
    해당 함수는 인자로 DOM 요소(`el`)를 받고, Vue 애플리케이션을 생성하고
    해당 애플리케이션을 지정된 DOM 요소에 마운트한다.
*/
const mount = (el) => {
    /*
        create 함수를 사용하여 Sample 컴포넌트를 기반으로
        Vue 애플리케이션 인스턴스 인 app을 생성한다.
    */
    const app = createApp(Sample)

    /*
        app을 el에 마운트 한다.
        이는 Vue 애플리케이션을 지정된 DOM 요소에 연결하는 과정이다.
    */
    app.mount(el)
};

/*
    vue-module이라는 ID를 가진 DOM 요소를 root 변수에 할당한다.
    이는 Vue 애플리케이션이 마운트 될 DOM 요소를 선택하는 과정이다.
*/
    const root = document.querySelector("#vue-module")

/*
    root가 존재하는 경우에만 mount 함수를 호출하여 Vue 애플리케이션을 마운트 한다.
    즉, vue-module ID를 가진 DOM 요소가 존재할 경우에만 Vue 애플리케이션이 렌더링된다.
*/
if (root) { mount(root) }

/*
    mount 함수를 내보낸다.
    이는 다른 파일에서 해당 함수를 가져와 사용할 수 있게 한다.
*/
export { mount }