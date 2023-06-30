<template lang="">
    <v-app-bar color="blue" app dark height="64">
        <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
        <v-btn @click="goHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span>CLOUD</span>
            </v-toolbar-title>
        </v-btn>
        
        <v-spacer></v-spacer>
        
        <v-menu>
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