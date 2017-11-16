export class FeedModel {
    name: string;
    image: [string];
    comments: Array<CommentModel>;
    islike: Array<IsLikeModel>;
}

export class CommentModel {
    comment: string;
    user: any;
    created: Date;
}
export class IsLikeModel {
    user: any;
    created: Date;
}