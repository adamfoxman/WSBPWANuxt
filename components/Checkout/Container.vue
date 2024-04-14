<script setup lang="ts">
const props = defineProps(['content', 'contentLeft', 'contentRight']);
</script>

<template>
  <div class="container">
    <slot/>
    <div class="title">
      <slot name="title"/>
    </div>
    <div class="content" :class="content">
      <slot name="content"/>
      <div class="content-left" :class="contentLeft">
        <slot name="content-left"/>
      </div>
      <div class="content-right" :class="contentRight">
        <slot name="content-right"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 15px;

  .title {
    font-size: x-large;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 991px) {
    .content-column {
      flex-direction: column;
    }
  }

  .content {
    margin-top: 25px;
    display: flex;
    gap: 15px;

    .content-left {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    @media only screen and (min-width: 991px) {
      .content-right {
        max-width: 25%;
        min-width: 270px;
        flex: 1;
      }
    }
    @media only screen and (max-width: 991px) {
      .content-left {
        min-width: 60%;
      }
    }
    @media only screen and (max-width: 767px) {
      .content {
        justify-content: space-around;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .content-none {
    display: none;
  }
}
</style>