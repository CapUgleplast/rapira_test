import {defineStore} from "pinia";
import type BlogStore from "@/models/stores/blog.store";
import {tags, articles} from "@/api/fakeapi"
import type TagModel from "@/models/tag.model";


export const useBlogStore = defineStore('blog', {
  state: (): BlogStore => ({
      tags: [],
      articles: articles,
      search: ''
  }),
  getters: {
      getTags: (state: BlogStore) => state.tags,
      getSearch: (state: BlogStore) => state.search,
      getActiveTags: (state: BlogStore) => state.tags?.filter((value) => value.active),
      getFiltered: (state: BlogStore): boolean => !!state.getActiveTags?.length,
      getArticles: (state: BlogStore) => state.articles,
      getArticleById: (state: BlogStore) => (id: number) => state.articles.find(item => item.id === id),
      getFilteredArticles: (state: BlogStore) => state.articles
          .filter((value)=> {
              if(state.getFiltered) {
                  return state.getActiveTags?.map((item: TagModel) => {
                      return item.label
                  }).some((tag: string) => value.tags.includes(tag))
              }
              return true
          })
          .filter((value)=> {
              return value.title.includes(state.search) || value.description.includes(state.search)
          }),
  },
  actions: {
      changeFilter(filter: string): void {
          const tag = this.tags.find((val) => val.label == filter)
          if(tag) {
              tag.active = !tag.active
          }
      },
      changeSearchFilter(search: string): void {
          this.search = search
      },
      fetchTags() {
          this.tags = tags.map(item => {
              return {
                  label: item,
                  active: false
              }
          })
      },
      clearAllFilters() {
          this.search = ''
          this.fetchTags()
      },
      addComment(content: string, articleId: number): void {
          const article = this.articles.find(article => article.id === articleId)

          if(article) {
              const cd = new Date()
              const time = cd.toLocaleTimeString().split(':')
              const commentDate = `${cd.toLocaleDateString()} в ${time[0]}:${time[1]}`
              const comment = {
                  content,
                  name: 'Крутой Чел',
                  img: '/avatar.jpg',
                  created_at: commentDate,
              }
              article.comments.push(comment)
          }
      }
  }
});
