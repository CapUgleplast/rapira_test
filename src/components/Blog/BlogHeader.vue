<script setup lang="ts">

import Search from "@/components/Blog/Search.vue";
import Filters from "@/components/Blog/TagFilters.vue";
import {useBlogStore} from "@/stores/blog";
import {computed, ref} from "vue";
import SvgI from "@/components/icons/svgI.vue";

const blogStore = useBlogStore()

blogStore.fetchTags()
const tags = computed(()=> {
  return blogStore.getTags
})

const tagsOpen = ref(true)

const tagsBlock = ref(null)

const changeSearch = (search: string) => {
    blogStore.changeSearchFilter(search)
}
</script>

<template>
  <div class="blog-header bg-secondary w-full flex flex-col items-center">
    <div class="main container px-7 flex justify-between items-center gap-x-10
                gap-y-2.5 md:py-5 py-3 flex-wrap">
          <div class="title text-2xl md:text-4xl leading-6 md:leading-8 font-bold text-dark">
            Блог
          </div>
          <div class="ms-auto flex md:order-2 order-1">
            <button class="me-2.5 text-primary text-xs"
                    v-if="blogStore.getFiltered || blogStore.getSearch"
                    @click="blogStore.clearAllFilters()">
              Очистить
            </button>
            <button @click="tagsOpen = !tagsOpen"
                    class="flex items-center gap-1 text-neutral text-xs"
                    data-type="filter-toggle"
            >
              Фильтр
              <span class="upside-down-transition transition" :class="{'--active': tagsOpen}">
                  <svg-i src="arrow-down"/>
              </span>
            </button>
          </div>
          <div class="search order-2 md:order-1">
            <Search @change="changeSearch"
                    @clear="changeSearch"
            />
          </div>
    </div>
    <div v-show="tagsOpen" class="filters container px-7 md:py-5 py-3">
      <Filters v-model="tags" />
    </div>
  </div>
</template>

<style scoped>

</style>