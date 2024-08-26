<script setup lang="ts">
import SvgI from "@/components/icons/svgI.vue";
import {computed} from "vue";
import {useBlogStore} from "@/stores/blog";
import ArticleComments from "@/components/Modals/Blog/ArticleComments.vue";
import type ArticleModel from "@/models/article.model";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
})

const emptyArticle = {
  id: 0,
  img: '',
  title: '',
  description: '',
  content: '',
  read_time: '',
  created_at: '',
  tags: [],
  comments: []
}

const sendComment = (comment: string) => {
  useBlogStore().addComment(comment, props.id)
}

const value = computed<ArticleModel>(()=> {
  return useBlogStore().getArticleById(props.id) || emptyArticle
})

</script>

<template>
<div class="flex flex-col gap-3.5">
  <h1 class="font-semibold text-2xl leading-7 pe-5">
    {{ value.title }}
  </h1>
  <div class="info text-neutral text-xs flex items-end gap-2.5">
    <div class="date">
      <p>
        {{value.created_at}}
      </p>
    </div>
    •
    <div class="time flex items-end gap-1">
      <svg-i src="clock"  />
      <p class="font-[Inter]">
        {{ value.read_time }}
      </p>
    </div>
    •
    <div class="comments flex items-end gap-1">
      <svg-i src="comments"  />
      <p>
        {{ value.comments.length || 0 }}
        комментариев
      </p>
    </div>
  </div>
  <div class="img rounded-xl overflow-hidden">
      <img class="w-full object-cover" height="373px" :src="value.img" alt=""/>
  </div>
  <div class="content">
      {{ value.content }}
  </div>
  <div class="tags flex gap-2.5">
    <div class="btn-tag" v-for="tag in value.tags">
      {{tag}}
    </div>
  </div>
  <article-comments v-model="value.comments" @send="sendComment" />

</div>
</template>

<style scoped>

</style>