<script setup lang="ts">

</script>

<template>
  <div class="info">
    <span>
      <slot name="title">Domyślna</slot>:
    </span>
    <slot name="content">Domyślna</slot>
  </div>
</template>

<style scoped lang="scss">
.info{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  span{
    margin-left: 10px;
  }
}

</style>