import type CommentModel from "@/models/comment.model";

export default interface ArticleModel {
    comments: CommentModel[];
    id: number,
    img: string,
    title: string,
    description: string,
    content: string,
    read_time: string,
    created_at: string,
    tags: string[]
}
