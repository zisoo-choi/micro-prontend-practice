<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>

<template>
    <div id="moduleApp">
        <p>Vue - Module App</p>
        <button @click="count++">
            빨리 버튼 눌러봐 {{ count }} 번 눌렀어
        </button>
    </div>
</template>

<style scoped>
#moduleApp{
    background-color: yellow;
}
</style>