<template lang="">
    <v-app-bar color="blue" app dark height="64">
        <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
        <v-btn @click="goHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span>CLOUD</span>
            </v-toolbar-title>
        </v-btn>
        
        <!-- 가변적인 공간 생성으로 툴바 아이템을 우측으로 밀어낸다. -->
        <v-spacer></v-spacer>
        
        <!--
            드롭다운 메뉴 생성

            v-menu 컴포넌트를 사용하여 도서관이라는 텍스트가 포함된
            드롭다운 메뉴를 구현하는 부분이다.

            버튼을 클릭하면 드롭다운 메뉴가 펼쳐지며,
            v-list 컴포넌트 내부에 있는 v-list-item 컴포넌트들이 나열된다.
        -->
        <v-menu>
            <!--
                v-slot:activator은 v-menu 컴포넌트에서 제공하는 특별한 슬롯으로,
                드롭다운 메뉴의 활성화자 버튼을 정의하는 역할을 한다.

                {props}는 슬롯 인자를 나타내며,
                v-menu 컴포넌트에서 전달되는 슬롯 인자를 받는다.

                ★ 즉, 도서관 이라는 버튼이 눌렸음을 알려주는 역할을 한다.
                따라서 해당 코드를 사용하여 활성화자 버튼을 설정하고,
                사용자가 이 버튼을 클릭하여 드롭다운 메뉴를 열 수 있다.

                이를 통해 도서관 버튼이 활성화되었다는 것을 사용자에게
                시각적으로 알려줄 수 있다.

                활성화 되었다는 표현이 없으면 드롭다운 메뉴가 계속 열려있게 되고,
                이건 우리가 원하는 방식이 아니기 때문에 이렇게 사용하는 것 같다.
            -->
            <template v-slot:activator="{props}">
                <v-btn color="white" v-bind="props">
                    <b>도서관</b>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn v-if="isLogin" text @click="clickToggle">
            <span>마이페이지</span>
            <v-icon right>mdi-hand-back-left-outline</v-icon>
        </v-btn>
        <v-btn v-if="!isLogin" text @click="signUp">
            <span>회원가입</span>
            <v-icon right>mdi-account-plus-outline</v-icon>
        </v-btn>
        <v-btn v-if="!isLogin" text @click="signIn">
            <span>로그인</span>
            <v-icon right>mdi-login</v-icon>
        </v-btn>
        <v-btn v-if="isLogin" text @click="signOut">
            <span>로그아웃</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'

export default {
    data () {
        return {
            navigation_drawer: false,
            isLogin: false,
            items: [
                { title: '재고관리' },
                { title: '도서관리' },
                { title: '회원관리' },
                { title: '문화강좌' },
            ]
        }
    },
    methods: {
        clickToggle () {
            alert('토글')
        },
        signUp () {
            alert('회원 가입')
        },
        signIn () {
            this.isLogin = true
            alert('로그인')
        },
        signOut () {
            this.isLogin = false
            alert('로그아웃')
        },
        gotoHome () {
            alert('고 홈')
        }
    }
}
</script>

<style scoped lang="scss">
.v-application--wrap {
    min-height: 0vh !important;
}
</style>