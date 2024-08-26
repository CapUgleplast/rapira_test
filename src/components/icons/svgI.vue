<script setup lang="ts">
import {filename} from "pathe/utils";
import {reactive, watch} from "vue";

const props = defineProps({
  src: {
    type: String,
    default: ''
  }
})

const glob = import.meta.glob('@/assets/icons/**/*.svg', { query: '?raw', import: 'default' });
const images = Object.fromEntries(
    Object.entries(glob)
        .map(([key, value]: [string, any]) => [filename(key), value]))


const icon = reactive({value: null})

watch(() => props.src, async ()=>  {
  if(!icon.value) {
      icon.value = props.src && (await images?.[props.src]?.());
  }

}, {immediate: true})
</script>

<template>
  <span class="i" v-html="icon.value || ''"/>
</template>

<style scoped lang="scss">
.i {

  ::v-deep(svg) {
    vertical-align: text-bottom;
  }
}
</style>