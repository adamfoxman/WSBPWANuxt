<template>
    <div class="info">
        <span class="icon">
            <i :class="'uil uil-' + icon"></i>
        </span>
        <span>{{ content }}</span>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Unicon from 'vue-unicons'

defineProps({
    icon: {
        type: String,
        default: 'info'
    },
    content: {
        type: String,
        default: 'Sample content'
    }
})
</script>

<style scoped lang="scss">
.info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #0f0f0f;
    padding: 10px;
    width: 100%;
    height: 44px;
    color: #fff;

    span {
        margin-right: 10px;

        i {
            color: white;
        }
    }
}
</style>