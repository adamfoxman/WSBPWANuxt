<script setup lang="ts">
import {ref} from 'vue';

const showModal = ref(false);

const showHideModal = () => {
  showModal.value = !showModal.value;
};

</script>

<template>
  <div class="main">
    <div class="menu">
      <Button @click="showHideModal">
        <span class="icon">
          <i class="fa-solid fa-bag-shopping"></i>
        </span>
      </Button>
    </div>
  </div>
  <Modal v-if="showModal" @closeModal="showHideModal"/>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;

  .menu {
    margin-left: auto;
    padding: 1%;
  }
}
</style>