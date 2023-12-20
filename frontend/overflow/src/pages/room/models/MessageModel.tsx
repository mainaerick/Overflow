export  interface MessageModel {
  body: string;
  host: { id: number; username: string };
  room:{id: number; name: string };
  created:string;
  updated:string;
}
