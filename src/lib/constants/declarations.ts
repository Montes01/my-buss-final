export interface ServiceCard {
  image: string;
  title: string;
  description: string;
  href: string;
};
export enum inputTypes {
  text = "text",
  number = "number",
  email = "email",
  password = "password",
  radio = "radio"
}
export type UserCard = {
  image: string;
  name:string;
  role: string;
  description: string;
};
export type user = {
  foto?: string;
  nombre: string;
  apellido?: string;
  edad: number;
  telefono?: string;
  contraseña?: string;
  correo: string;
  documento: string;
  rol: string;
};
