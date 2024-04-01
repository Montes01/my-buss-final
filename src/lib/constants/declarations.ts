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
  radio = "radio",
  tel = "tel",
  file = "file",
  "date-time-local" = "date-time-local",
  date = "date",
  time = "time",
  month = "month",
  week = "week",
  color = "color",
  range = "range",
  search = "search",
  url = "url",
  hidden = "hidden",
  checkbox = "checkbox",
  button = "button",
  submit = "submit",
  reset = "reset",
  image = "image",
  select = "select",
  textarea = "textarea",
  timeLocal = "time-local",
  weekLocal = "week-local",
}
export type UserCard = {
  image: string;
  name: string;
  role: string;
  description: string;
};
// Modelo de Usuario
export interface Usuario {
  ID_Usuario: number;
  Nombre: string;
  Rol?: string;
  CorreoElectronico: string;
  Contraseña?: string;
  FotoPerfil?: string;
  Dirección?: string;
  Teléfono: string;
}

// Modelo de Empresa
export interface Empresa {
  ID_Empresa: number;
  Nombre: string;
  CorreoElectronico: string;
  Contraseña: string;
  Logo?: string;
  Dirección?: string;
  Teléfono: string;
}

// Modelo de Ruta
export interface Ruta {
  ID_Ruta: number;
  ID_Empresa: number;
  Nombre: string;
  Tipo?: string;
  Descripción?: string;
  Horario?: string;
  Tarifa: number;
}

// Modelo de Paradero
export interface Paradero {
  ID_Paradero: number;
  Nombre: string;
  Ubicación?: any; // Tipo de datos geográficos (puede variar según la implementación)
  Descripción?: string;
  Foto?: string;
}

// Modelo de Bus
export interface Bus {
  ID_Bus: number;
  ID_Empresa: number;
  Placa: string;
  Modelo?: string;
  Capacidad?: number;
  Estado?: string;
}

// Modelo de Conductor
export interface Conductor {
  ID_Conductor: number;
  ID_Usuario: number;
  LicenciaConducción?: string;
  FechaContrato?: Date;
  HorarioTrabajo?: string;
  Estado?: boolean;
}

// Modelo de Ticket
export interface Ticket {
  ID_Ticket: number;
  ID_Usuario: number;
  ID_Empresa: number;
  FechaCompra: Date;
  Precio: number;
  TipoPago?: string;
  Estado?: string;
}

// Modelo de Ruta_Paradero
export interface Ruta_Paradero {
  ID_Ruta: number;
  ID_Paradero: number;
  Orden: number;
}

export interface Response {
  Message: string;
  Data: any;
}

