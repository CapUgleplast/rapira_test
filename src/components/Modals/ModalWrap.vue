<script setup lang="ts">
import {useLayoutStore} from "@/stores/layout";
import SvgI from "@/components/icons/svgI.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const store = useLayoutStore()

</script>

<template>
  <teleport v-if="store.getModalState == name" to="#modals">
    <div class="modal p-4 bg-secondary rounded-xl shadow-2xl" @click.stop>
      <div class="relative">
        <button class="absolute right-0 bg-secondary text-neutral ps-2" @click="store.setModalState('')">
          <svg-i src="cross"/>
        </button>
      </div>
      <slot />
    </div>
  </teleport>
</template>

<style scoped>

</style>