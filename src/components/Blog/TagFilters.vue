<script setup lang="ts">
import SvgI from "@/components/icons/svgI.vue";
import type TagModel from "@/models/tag.model";
import {ref} from "vue";

const model = defineModel<TagModel[]>()

const hoveredTag = ref('')
</script>

<template>
<div class="container">
    <div class="flex flex-wrap gap-2.5">
      <div class="btn-tag flex items-center gap-[6px]"
           :class="{'--active': filter.active}"
           data-type="tag"
           v-for="filter in model"
           @click="filter.active = !filter.active"
           @mouseenter="hoveredTag = filter.label"
           @mouseleave="hoveredTag = ''"
      >
        {{ filter.label }}
        <span data-type="icon-plus" v-show="!filter.active">
          <svg-i src="plus"/>
        </span>
        <span data-type="icon-check" v-show="filter.active && hoveredTag != filter.label">
          <svg-i src="check"/>
        </span>
        <span data-type="icon-cross" v-show="filter.active && hoveredTag === filter.label">
          <svg-i src="cross"/>
        </span>
      </div>
    </div>
</div>
</template>

<style scoped>

</style>