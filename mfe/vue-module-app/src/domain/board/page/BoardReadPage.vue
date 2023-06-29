<template lang="">
    <div>
        <h2>Vue + Spring + JPA 게시판 읽기</h2>
        <board-read-form v-if="board" :board="board"/>
        <p v-else>로딩중 .......</p>
        <router-link :to="{ name: 'BoardModifyPage', params: { boardId }}">
            게시물 수정
        </router-link>
        <button @click="onDelete">삭제</button>
        <router-link :to="{ name: 'BoardListPage' }">
            돌아가기
        </router-link>
    </div>
</template>

<script>
import BoardReadForm from '../components/BoardReadForm.vue'
import { mapActions, mapState } from 'vuex';

const boardModule = 'boardModule'

export default {
    components: {
        BoardReadForm
    },
    props: {
        boardId: {
            type: String,
            // ↓ boardId에 대한 props를 부모 컴포넌트로 부터 "필수"로 전달받아야 한다는 뜻
            required: true,
        },
    },
    computed: {
        ...mapState(boardModule, ['board']) // 무조건 적인 것은 아니나, 일반적으로 computed에서 동작한다.
    },
    methods: {
        ...mapActions( // 헬퍼 함수이기 때문에 methods에서 동작한다.
            boardModule, ['requestBoardToSpring', 'requestDeleteBoardToSpring']
        ),
        async onDelete () {
            await this.requestDeleteBoardToSpring(this.boardId)
            await this.$router.push({ name: 'BoardListPage' })
        }
    },
    created () {
        this.requestBoardToSpring(this.boardId)
    }
}
</script>
<style lang="">
    
</style>