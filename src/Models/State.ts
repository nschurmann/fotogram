import { IPost } from './PostsModel'

export interface IPosts {
  data: IPost;
  fetched: boolean;
  fetching: boolean;
}
export interface IState {
  Posts: IPosts;
  Users: {
    profileImage?: string;
  };
}
