
 
 export interface INote {
    id: string;
    createdAt: string;
    updatedAt?: string;
    content: string;
    favoriteCount: number;
    author: IAuthor
}

export interface IAuthor {
    username: string;
    id: string;
    avatar?: string;
}