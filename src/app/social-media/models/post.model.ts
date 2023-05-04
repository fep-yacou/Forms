import { Comment } from "src/app/core/models/comment.model";

export class Post {
    id!: number;
    userId!: number;
    title!: string;
    createdDate!: String;
    imageUrl!: string;
    content!: string;
    comments!: Comment[];
}