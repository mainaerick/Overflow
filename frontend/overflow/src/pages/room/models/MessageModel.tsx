export interface MessageModel {
  id: number;
  host: Host;
  room: Room;
  body: string;
  updated: string;
  created: string;
}
interface Room {
  id: number;
  name: string;
}
interface Host {
  id: number;
  username: string;
}
