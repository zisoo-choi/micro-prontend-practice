<template lang="">
    <div>
        <h2>안녕 나는 Vue Component: Board란다</h2>
        <div style="text-align: left; margin: 15px;">
            <router-link :to="{ name: 'BoardRegisterPage' }">
                게시물 작성
            </router-link>
        </div>
        <board-list-form :boards="boards"/>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BoardListForm from '../components/BoardListForm.vue'
import { RouterLink } from 'vue-router' // Vue Router 에서 제공하는 RouterLink

const boardModule = 'boardModule' // Vuex에서 사용할 모듈 이름

export default {
    components: { BoardListForm, RouterLink }, // 사용하는 하위 컴포넌트 등록
    computed: { // vuex의 상태를 컴포넌트의 계산된 속성으로 매핑한다.
        ...mapState(boardModule, ['boards']), // boardModule의 boards 상태를 여기 쓰여져 있는 boards로 매핑함
    },
    mounted () { // 컴포넌트가 마운트 된 후, 호출되는 라이프사이클 훅
        this.requestBoardListToSpring() // Vuex 액션인 requestBoardListToSpring을 호출하여 서버로부터 게시물 목록을 가져옴
    },
    methods: {
        ...mapActions( // 실제 동작
            boardModule, ['requestBoardListToSpring'] // Vuex 액션인 requestBoardListToSpring을 컴포넌트의 메서드로 매핑
        )
    }
}
</script>

<style lang="">
    
</style>