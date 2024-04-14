<script setup lang="ts">
import {ref} from 'vue';

const showModal = ref(false);

const showHideModal = () => {
  showModal.value = !showModal.value;
};

</script>

<template>
  <div class="main-page">
    <div class="menu">
      <Button @click="showHideModal">
        <span class="icon">
          <i class="fa-solid fa-bag-shopping"></i>
        </span>
      </Button>
    </div>
    <Modal v-if="showModal" @closeModal="showHideModal"/>
    <MainBestsellers/>
    <MainNewsletter></MainNewsletter>
  </div>
</template>

<style scoped>
.main-page {
  color: red;
}
</style>