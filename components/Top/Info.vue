<template>
    <div class="info">
        <span>
            <font-awesome-icon :icon="icon" />
        </span>
        <span>{{ content }}</span>
    </div>
</template>

<script setup lang="ts">
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
    background-color: white;
    padding: 10px;
    width: 100%;
    height: 44px;
    color: #000;

    span {
        margin-right: 10px;
    }
}
</style>