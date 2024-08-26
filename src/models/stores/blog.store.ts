import type TagModel from "@/models/tag.model";
import type ArticleModel from "@/models/article.model";

export default interface BlogStore {
    tags: TagModel[],
    articles: ArticleModel[],
    search: string,

    getTags?: TagModel[],
    getSearch?: string
    getActiveTags?: TagModel[],
    getFiltered?: boolean,
    getArticles?: ArticleModel[],
    getArticleById?: ArticleModel,
    getFilteredArticles?: ArticleModel[],
}
