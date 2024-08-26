<script setup lang="ts">

import BlogHeader from "@/components/Blog/BlogHeader.vue";
import BlogPage from "@/components/Blog/BlogPage.vue";
</script>

<template>
    <div class="w-full">
       <BlogHeader />
        <div class="content flex justify-center mt-5">
          <BlogPage/>
        </div>
    </div>
</template>

<style scoped>

</style>