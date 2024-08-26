<script setup lang="ts">

import BlogCard from "@/components/Blog/BlogCard.vue";
import ModalWrap from "@/components/Modals/ModalWrap.vue";
import {useLayoutStore} from "@/stores/layout";
import {useBlogStore} from "@/stores/blog";
import {computed, ref} from "vue";
import ArticleModal from "@/components/Modals/Blog/ArticleModal.vue";
import NotFoundPage from "@/components/Layout/NotFoundPage.vue";

const layoutStore = useLayoutStore()

const currentArticle = ref(0)

const articles = computed(() => {
    return useBlogStore().getFilteredArticles
})

const openModal = (article: any) => {
  currentArticle.value = article
  layoutStore.setModalState('article')
}


</script>

<template>
    <div class="blog-page container bg-secondary lg:p-7 p-3.5 rounded-xl">
        <section class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
                        gap-x-5 gap-y-5 md:gap-y-[25px] lg:gap-y-10">
          <div v-for="item in articles"
               :key="item.id"
               @click="() => openModal(item.id)">
            <BlogCard :value="item" />
          </div>
        </section>
        <not-found-page v-if="!articles.length" class="py-16"/>
        <ModalWrap name="article" >
          <article-modal class="max-w-[630px]" :id="currentArticle"/>
        </ModalWrap>
    </div>
</template>

<style scoped>

</style>