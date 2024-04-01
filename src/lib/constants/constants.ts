import { ServiceCard, UserCard } from "./declarations"

export const PROJECT_NAME = "MyBuss";

export const STRIPE_API_KEY = "pk_test_51OyEqeITkeuqFU4OqAT7JIG0d7ieF7a0ztFQD6L7HnpwWG9qGRWhSV9oZTghpFemR4vZ3E3nOjqQR6l0yNJ9Ty8g00xPKYFTAg"

export const SERVER_URL = "https://mybuss.azurewebsites.net/" //?? process.env.SERVER_URL ?? ;
// export const SERVER_URL = "https://localhost:7151/"

export const ENDPOINTS = {
  USER: {
    LOGIN: "Usuario/Ingresar",
    REGISTER: "Usuario/Registrar",
    UPDATE: "Usuario/Actualizar",
    WORK: {
      REQUEST: "",
      CANCEL: ""
    }
  },
  ROUTE: {
    ADD: "Ruta/Agregar",
    LIST: "Ruta/Lista",
    LIST_BY_COMPANY: "Ruta/ListaPorEmpresa",
    DELETE: "Ruta/Eliminar",
    ADD_STOP: "Ruta/AgregarParadero",
    ALTERNATIVE_LIST: "Ruta/Alternativas",
    GET: "Ruta/Obtener",
    LIST_BY_STOP: "Ruta/ListarPorParadero",
    GET_BY_NAME: "Ruta/ObtenerPorNombre",
  },
  BUS: {
    ADD: "Bus/Agregar",
    LIST: "Bus/Listar",
  },
  COMPANY: {
    LIST: "Empresa/Listar",
    ADD: "Empresa/Registrar",
    LOGIN: "Empresa/Ingresar",
    GET: "Empresa/Obtener",
    DELETE: "Empresa/Eliminar",
  },
   TICKET: {
    ADD: "Ticket/Agregar",
    DELETE: "Ticket/Eliminar",
    LIST: "Ticket/Listar",
    GET: "Ticket/Obtener",
    PAY: "Ticket/Pagar",
  },
  STOP: {
    ADD: "Paradero/Agregar",
    LIST: "Paradero/Listar",
    GET: "Paradero/Obtener",
    LIST_BY_ROUTE: "Paradero/ListarPorRuta",
    DELETE: "Paradero/Eliminar",
  },
  ADMIN: {
    DELETE_COMPANY: "Admin/Eliminar/Empresa",
    DELETE_TICKET: "Admin/Eliminar/Ticket",
    LIST_TICKETS: "Admin/Listar/Tickets",
    DELETE_USER: "Admin/Eliminar/Usuario",
    LIST_USERS: "Admin/Listar/Usuarios",
    ACEPT_DRIVER: "Usuario/Aceptar",
    REJECT_DRIVER: "Usuario/Rechazar",
    LIST_ASPIRANTS: "Usuario/Listar/Aspirantes",
  }


};

export const PRINCIPAL_MESSAGE = `Descubre y planifica tus rutas con nosotros. Con nuestra plataforma innovadora podras exporar nuevos destinos, encontrar las mejores rutas y personalizar tu experiencia de viaje. ¡Viaja con comodidad y eficiencia en ${PROJECT_NAME}!`;

export const Services: ServiceCard[] = [
  {
    title: "Rutas comunes",
    description: "Consulta los horarios de las rutas de transporte público y lugares de interés en la ciudad.",
    image: "/Images/Gadget-1.png",
    href: "/home/routes/",
  },
  {
    title: "Rutas Alternativas",
    description: "Explora diferentes rutas para llegar a tu destino de manera eficiente.",
    image: "/Images/Gadget-2.png",
    href: "/home/routes/alternative",
  },
  {
    title: "Paradas",
    description: "Aquí veras los paraderos \"Amable\" de la ciudad",
    image: "/Images/Gadget-4.png",
    href: "/home/stops",
  },
  {
    title: "Compra tus tiquetes aquí",
    description: "Compra tus tiquetes de manera anticipada aquí",
    image: "/Images/Gadget-3.png",
    href: "/buy",
  }
];

export const users: UserCard[] = [
  {
    image: "samuel-montes",
    name: "Samuel Montes",
    role: "Desarrollador Backend / Product Owner",
    description: "Samuel es el Product Owner del proyecto.",
  },
  {
    image: "juan-gallego",
    name: "Sebastian Gallego",
    role: "Documentación",
    description: "Sebastian es quien realiza la documentación del proyecto.",
  },
  {
    image: "juan-esteban",
    name: "Juan Esteban",
    role: "Bases de Datos / Documentación",
    description: "Juan es quien realiza el backend del proyecto.",
  },
  {
    image: "maicol-garcia",
    name: "Maicol Garcia",
    role: "Desarrollador Frontend",
    description: "Maicol es quien realiza el frontend del proyecto.",
  },
  {
    image: "bayron-galeano",
    name: "Bayron Galeano",
    role: "Documentación",
    description: "Bayron es quien realiza la documentación del proyecto.",
  },
];

export const SLIDER_MESSAGES = [
  "¡Viaja con comodidad y eficiencia!",
  "¡Descubre nuevos destinos!",
  "¡Personaliza tu experiencia de viaje!",
  "¡Encuentra las mejores rutas!",
  "¡Explora nuevos destinos!",
  "¡Planifica tus rutas con nosotros!",
];