<script setup lang="ts">
import {ref, watch} from "vue";
import SvgI from "@/components/icons/svgI.vue";

const emit = defineEmits(['change', 'clear'])

const value = ref('')

const changeValue = () => {
    emit('change', value.value)
}

const clearValue = () => {
  value.value = ''
  emit('clear', value.value)
}

const log = (event: any) => {
  console.log(event)
}

watch(value, (curValue, oldValue, onCleanup)=> {
  if (!curValue.length && oldValue.length) {
     clearValue()
  }
})
</script>

<template>
<div class="search container">
    <div class="relative input-search">
        <label>
          <svg-i src="magnifier"/>
        </label>
        <input
            type="text"
            data-type="search"
            class=""
            v-model="value"
            placeholder="Поиск"
            @keydown.enter="changeValue"
        />

        <button @click="clearValue"
                v-if="value"
                class="!top-2.5"
                data-type="reset"
        >
          <svg-i class="max-w-[14px]" src="cross"/>
        </button>
  </div>
</div>
</template>

<style scoped>

</style>