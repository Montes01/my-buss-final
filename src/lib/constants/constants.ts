import {ServiceCard, UserCard} from "./declarations"

export const PRINCIPAL_MESSAGE = "Bienvenido a My Buss, la mejor aplicación para consultar el estado de las rutas de bus en armenia";

export const Services: ServiceCard[] = [
  {
    title: "Horarios de la Ciudad",
    description:
      "Consulta los horarios de transporte público y lugares de interés en la ciudad.",
    image:
      "https://cdn-icons-png.flaticon.com/128/4867/4867322.png?ga=GA1.1.990606510.1700933728&semt=ais",
    href: "/horarios-ciudad",
  },
  {
    title: "Rutas Alternativas",
    description:
      "Explora diferentes rutas para llegar a tu destino de manera eficiente.",
    image:
      "https://cdn-icons-png.flaticon.com/128/4668/4668475.png?ga=GA1.1.990606510.1700933728&semt=ais",
    href: "/horarios-ciudad",
  },
  {
    title: "Sitios de Interés",
    description:
      "Descubre los lugares más emblemáticos y sitios turísticos de la ciudad.",
    image:
      "https://cdn-icons-png.flaticon.com/128/12679/12679368.png?ga=GA1.1.990606510.1700933728&semt=ais",
    href: "/horarios-ciudad",
  },
  {
    title: "Asistencia al Viajero",
    description:
      "Servicio de asistencia y soporte en caso de incidencias durante el viaje.",
    image:
      "https://cdn-icons-png.flaticon.com/128/895/895263.png?ga=GA1.1.990606510.1700933728&semt=ais",
    href: "/horarios-ciudad",
  },
];

export const users: UserCard[] = [
  {
    image: "",
    name: "Samuel Montes",
    role: "Product Owner",
    description: "Samuel is the Product Owner of the project.",
  },
  {
    image: "",
    name: "Sebastian Gallego",
    role: "Docs",
    description: "Sebastian is who do the documentation of the project.",
  },
  {
    image: "",
    name: "Juan Esteban",
    role: "Backend Developer",
    description: "Juan is who do the backend of the project.",
  },
  {
    image: "",
    name: "Maicol Garcia",
    role: "Frontend Developer",
    description: "Maicol is who do the frontend of the project.",
  },
];