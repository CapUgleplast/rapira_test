<script setup lang="ts">
import { useRoute } from "vue-router";
import {useLayoutStore} from "@/stores/layout";
import {ref, watch} from "vue";
const route = useRoute();

const store = useLayoutStore()

const modals = ref(null)


</script>

<template>
  <component :is="route.meta.layoutComponent || ''">
    <div id="modals" ref="modals" class="layout-modal"
         :class="{'hidden': !store.getModalState}"
         @click="store.setModalState('')"/>
    <slot />
  </component>
</template>

<style scoped></style>
