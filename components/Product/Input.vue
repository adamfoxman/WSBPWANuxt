<script setup lang="ts">

</script>

<template>
  <div class="input-pair">
    <label class="label">
      <slot/>
    </label>
    <div class="input-icon">
      <input class="input" type="text">
      <slot name="icon"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-pair {
  width: 100%;

  .label {
    font-weight: normal;
  }

  .input {
    border: gray 1px solid;
  }

  .input-icon {
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>