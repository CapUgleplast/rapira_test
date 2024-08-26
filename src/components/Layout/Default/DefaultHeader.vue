<script setup lang="ts">

import SvgI from "@/components/icons/svgI.vue";
</script>

<template>
  <div class="bg-black">
    <div class="container flex flex-row text-light gap-20 p-3.5 mx-auto">
        <div class="logo self-center flex items-center gap-3.5">
          <svg-i class="lg:hidden" src="general"/>
          <img src="/Frame.png" alt="logo">
        </div>
        <nav class="lg:block hidden">
          <button class="btn-dark" >Главная</button>
          <router-link class="btn-dark" to="/">Блог</router-link>
        </nav>
    </div>
  </div>
</template>

<style scoped>

</style>