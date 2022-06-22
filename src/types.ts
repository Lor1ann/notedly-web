
 
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

export interface ISignUpData {
    username?: string;
    email?: string;
    password?: string;
}

export interface IUserFormProps{
    action: any,
    formType: string
}