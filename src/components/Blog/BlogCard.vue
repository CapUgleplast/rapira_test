<script setup lang="ts">
import type ArticleModel from "@/models/article.model";
import {useBlogStore} from "@/stores/blog";
import SvgI from "@/components/icons/svgI.vue";
import type {PropType} from "vue";

const props = defineProps({
  value: {
    type: Object as PropType<ArticleModel>,
    default: {}
  }
})

const filterTag = (filter: string) => {
  useBlogStore().changeFilter(filter)
}

</script>

<template>
  <article class="blog-card container cursor-pointer">
        <div class="wrapper">
          <div class="image max-h-[200px] md:max-h-[220px] lg:max-h-[250px] overflow-hidden rounded-xl mb-2.5">
            <img :src="value.img" :alt="value.title" />
          </div>
          <div class="content flex flex-col gap-2.5">
            <div class="info text-neutral text-xs flex items-end gap-2.5">
              <div class="date">
                <p>
                  {{value.created_at}}
                </p>
              </div>
              •
              <div class="time flex items-end gap-1">
                <svg-i src="clock"  />
                <p>
                  {{value.read_time}}
                </p>
              </div>
              •
              <div class="comments flex items-end gap-1">
                <svg-i src="comments"  />
                <p>
                  {{value.comments.length}}
                    комментариев
                </p>
              </div>
            </div>
            <h1 class="title text-2xl font-semibold leading-6">
              {{value.title}}
            </h1>
            <div class="description">
              {{value.description}}
            </div>
            <div class="tags flex gap-2.5">
              <div class="btn-tag" v-for="tag in value.tags" @click.stop="() => filterTag(tag)">
                {{tag}}
              </div>
            </div>
          </div>
        </div>
  </article>
</template>

<style scoped>

</style>