<template lang="">
    <div>
        <h3>게시물 목록</h3>
        <table style="margin: 10px;">
            <!--
                table의 제목같은 틀
            -->
            <tr>
                <th align="center" width="6%">번호</th>
                <th align="center" width="70%">제목</th>
                <th align="center" width="10%">작성자</th>
                <th align="center" width="14%">등록일자</th>
            </tr>

            <!--
                만약 boards(= 데이터)가 존재하지 않으면 X 실행할 구문
            -->
            <tr v-if="!boards || (Array.isArray(boards) && boards.length === 0)">
                <td colspan="4">
                    현재 등록된 게시물이 없습니다!
                </td>
            </tr>

            <!--
                만약 boards(= 데이터)가 존재하면 O 실행할 구문
            -->
            <tr v-else v-for="board in boards" :key="board.boardId">
                <!-- 번호 -->
                <td align="center">
                    {{ board.boardId }}
                </td>
                <!-- 제목 -->
                <td align="center">
                    <router-link :to="{ 
                        name: 'BoardReadPage', 
                        // 읽기 페이지에 전달되는 매개변수로 boardId의 문자열 값을 보낸다는 뜻
                        params: { boardId: board.boardId.toString() }}"> 
                            {{ board.title }}
                    </router-link>
                </td>
                <!-- 작성자 -->
                <td align="center">
                    {{ board.writer }}
                </td>
                <!-- 등록일자 -->
                <td align="center">
                    {{ board.createDate }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        boards: {
            type: Array
        }
    }
}
</script>

<style lang="">
    
</style>