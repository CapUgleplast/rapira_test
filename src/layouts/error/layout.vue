<script setup lang="ts">
import { useRoute } from "vue-router";

</script>

<template>
  <div class="layout">
    <header
      >
      <h1 class="logo"
          v-text="'404'"
      />
    </header>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .layout{
    padding-bottom: 120px;
  }

  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 150px 100px 0px;

    &.shadow {
      box-shadow: 4px 4px 65px -6px rgba(34, 60, 80, 0.10);
    }

    h1{
      margin-bottom: 120px;
      cursor: pointer;
      color: #009b94;
      font-size: 40px;
    }
  }

</style>
