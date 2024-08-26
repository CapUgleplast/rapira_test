<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center">
    <img src="/search-list.png"/>
    <p class="font-medium text-sm text-gray-500 mt-2 mb-1">
      Поиск не дал результатов
    </p>
    <span class="whitespace-pre-wrap text-center text-xs text-neutral"
          v-html="'Повторите поиск или используйте фильтр для \n структуризации контента'"/>
  </div>
</template>

<style scoped>

</style>