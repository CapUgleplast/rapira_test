<script setup lang="ts">

import SvgI from "@/components/icons/svgI.vue";
import {computed, ref} from "vue";
import type CommentModel from "@/models/comment.model";

const model = defineModel<CommentModel[]>({
    default: []
})

const emit = defineEmits(['send'])

const commentValue = ref('')

const textareaFocus = ref(false)
const maxLength = 250


const sendComment = () => {
  if(commentValue.value) {
    emit('send', commentValue.value)
    commentValue.value = ''
  }
}

const clearArea = () => {
  commentValue.value = ''
}

const checkCommentLength = computed(() => {
  return commentValue.value.length
})

const textareaActive = computed(() => {
  return checkCommentLength.value || textareaFocus.value
})

</script>

<template>
  <div class="comments">
    <div class="text-base leading-4 font-semibold mb-2.5">
      Коментариев
      <span class="text-neutral font-medium ms-1.5">
        {{model.length || 0}}
      </span>
    </div>
    <div class="mb-2.5">
      <div class="input-comment flex flex-col gap-1.5 mb-2.5">
          <textarea :class="{'--error': checkCommentLength > maxLength,
                             '--focus': textareaActive}"
                    ref="textarea"
                    placeholder="Введите комментарий"
                    v-model="commentValue"
                    @focus="textareaFocus = true"
                    @blur="textareaFocus = false"
          />
        <label v-if="textareaActive"
               class="text-neutral font-medium text-xs leading-3">
            <span :class="{'text-red': checkCommentLength > maxLength}"
                  data-type="chars-count"
            >
              {{ checkCommentLength }}
            </span>
          из
          <span>
              {{ maxLength }}
            </span>
          символов
        </label>
        <button v-if="checkCommentLength"
                @click.stop="clearArea"
                data-type="clear"
                class="absolute top-2.5 right-4 text-neutral">
          <svg-i src="cross" />
        </button>
      </div>
      <div class="justify-end flex gap-2.5" v-if="textareaActive">
        <button class="btn-primary-light"
                data-type="cancel"
                @click.prevent="commentValue = ''"
        >
          Отмена
        </button>
        <button class="btn-primary"
                data-type="publish"
                :disabled="checkCommentLength > maxLength"
                @click="sendComment"
                @keydown.enter="sendComment" >
          Опубликовать
        </button>
      </div>
    </div>
    <div>
      <div v-for="item in model"
           class="flex gap-3 items-start pt-3"
           data-type="comment"
      >
        <div class="rounded-[50%] overflow-hidden">
          <img class="object-cover h-[38px]"
               :src="item.img"
               :alt="item.name"
               width="38px"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <div class="text-dark-light leading-4 font-semibold">
            {{item.name}}
          </div>
          <p class="leading-3 text-sm whitespace-pre-wrap">
            {{item.content}}
          </p>
          <div class="font-medium text-xs leading-2 text-neutral">
            {{ item.created_at }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>