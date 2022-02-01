import { Persona } from "./persona";

export interface CustomResponse{
  timestamp:Date;
  statusCode:number;
  status:string;
  reason:string;
  message:string;
  developerMessage:string;
  data: { personas: Persona[] };
}
