<!-- 실제 보이는 페이지 -->
<script setup>
/*
    setup은
    1. 블록 내에서 변수를 선언할 때 const 키워드 없이 직접 변수 선언 가능
    2. 해당 블록에서 필요한 외부 모듈을 가져올 때 import 구문을 사용하여 가져오기 가능
    3. 블록 내에서 ref 함수를 사용하여 리액티브 상태를 정의할 수 있다.
    4. 해당 블록에서 이벤트 핸들러를 선언할 수 있다.

    ※ 기존 옵션 API보다 명확하고 간결한 구문을 제공하며,
    구성 요소를 보다 가독성 높게 작성할 수 있게 돕는다.
*/
/*
    ref 함수는 데이터를 반응적으로 관리하기 위해 사용된다.
    컴포넌트 내에서 상태를 추적하고 업데이트할 수 있게 해준다.

    const count = ref(0) 라고 선언 시, count는 반응적인 데이터 객체가 된다.
    값이 변경되면 vue는 자동으로 컴포넌트를 리렌더링하여 변경 사항을 반영한다.
*/
import { ref } from 'vue';
import BoardListPage from './board/page/BoardListPage.vue';
const count = ref(0)
</script>

<template>
    <div id="moduleApp">
        <p>나는 Vue Module App</p>
        <button @click="count++">
            빨리 버튼 눌러봐 {{ count }} 번 눌럿어
        </button>
        <router-view/>
    </div>
</template>

<style scoped>
#moduleApp{
    background-color: yellow;
}
</style>