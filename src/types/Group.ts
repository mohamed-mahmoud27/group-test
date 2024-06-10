import { IPost } from "./Post";

export interface IGroup {
  id: string;
  name: string;
  description: string;
  createdDate: Date;
  posts?: Array<IPost>;
}
