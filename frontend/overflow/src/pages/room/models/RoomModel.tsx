import { UserModel } from "../../../features/auth/models/UserModel";

export interface RoomModel {
    description: string;
    name: string;
    participants: [];
    topic: string;
    host:string;
    created:string
    id:number
  }