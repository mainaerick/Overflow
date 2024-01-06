import { UserModel } from "../../../features/auth/models/UserModel";

export interface RoomModel {
  id: number;
  host: string;
  topic: Topic;
  name: string;
  description: string;
  participants: any[];
  updated: string;
  created: string;
  }
 
  interface Topic {
    id: number;
    name: string;
    updated: string;
    created: string;
  }