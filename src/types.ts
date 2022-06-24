
 
 export interface INote {
    id: string;
    createdAt: string;
    updatedAt?: string;
    content: string;
    favoriteCount: number;
    author: IAuthor
}

export interface IUser {
    id: string;
    username: string
    email: string
    avatar: string
    notes: INote[]
    favorites: INote[]
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

export interface INewFormProps{
    action: any,
    content?: string,
}

export interface IFavoriteNoteProps {
    me: IUser,
    noteId: string,
    favoriteCount: number,
}