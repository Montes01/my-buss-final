import { Empresa, Ruta, Usuario } from "./declarations"

import { decode } from "jsonwebtoken";
import { decodeTokenMock } from "./mocks";

export function parseUser(user: any): Usuario {
  
    if (!user) throw new Error("Usuario inválido");
    if (!user.ID_Usuario) throw new Error("ID de usuario inválido");
    if (!user.Nombre) throw new Error("Nombre de usuario inválido");
    if (!user.CorreoElectronico) throw new Error("Correo electrónico de usuario inválido");
    if (!user.Teléfono) throw new Error("Número de teléfono de usuario inválido");

    console.log(user)

    return {
        ID_Usuario: user.ID_Usuario,
        Nombre: user.Nombre,
        CorreoElectronico: user.CorreoElectronico,
        Teléfono: user.Teléfono,
        Contraseña: user.Contraseña ? user.Contraseña : "empty",
        FotoPerfil: user.FotoPerfil ? user.FotoPerfil : "empty",
        Dirección: user.Dirección ? user.Dirección : "empty",
        Rol: user.Rol ? user.Rol : "Usuario"
    }
}

export function parseCompany(company: any): Empresa {
    if (!company) throw new Error("Empresa inválida");
    if (!company.ID_Empresa) throw new Error("ID de empresa inválido");
    if (!company.Nombre) throw new Error("Nombre de empresa inválido");
    if (!company.CorreoElectronico) throw new Error("Correo electrónico de empresa inválido");
    if (!company.Telefono) throw new Error("Número de teléfono de empresa inválido");
    if (!company.Logo) throw new Error("Logo de empresa inválido");
    if (!company.Direccion) throw new Error("Dirección de empresa inválida");

    return {
        iD_Empresa: company.ID_Empresa,
        nombre: company.Nombre,
        correoElectronico: company.CorreoElectronico,
        logo: company.Logo,
        dirección: company.Dirección,
        teléfono: company.Telefono,
        contraseña: company.Contraseña ? company.Contraseña : "empty"
    }
}

export function readToken(token: string): Usuario {
    const user = decode(token)
    if (user === null) throw new Error("invalid token")
    return parseUser(user)
}

export const isCompanyAuthenticated = (callback: Function) => {
    const token = localStorage.getItem("company-token")

    if (token) {
        const company = decode(token)
        if (company) {
            callback(parseCompany(company))
        }
    } else {
        callback(null)
    }
}

export const parseSingularRoute = (route: any): Ruta => {
  /*
export interface Ruta {
  ID_Ruta: number;
  ID_Empresa: number;
  Nombre: string;
  Tipo?: string;
  Descripción?: string;
  Horario?: string;
  Tarifa: number;
}
  */
    if (!route) throw new Error("Ruta inválida");
    if (!route.iD_Ruta) throw new Error("ID de ruta inválido");
    if (!route.iD_Empresa) throw new Error("ID de empresa inválido");
    if (!route.nombre) throw new Error("Nombre de ruta inválido");
    if (!route.tarifa) throw new Error("Tarifa de ruta inválida");

    return {
        ID_Ruta: route.iD_Ruta,
        ID_Empresa: route.iD_Empresa,
        Nombre: route.nombre,
        Tipo: route.tipo ? route.tipo : "empty",
        Descripción: route.descripcion ? route.descripcion : "empty",
        Horario: route.horario ? route.horario : "empty",
        Tarifa: route.tarifa
    }
}

export const parseRouteList = (routes: any[]): Ruta[] => {
    return routes.map(route => parseSingularRoute(route))
}

export const isUserAuthenticated = (callback: Function) => {
    const token = localStorage.getItem("user-token")
    if (token) {
        const user = decode(token)
        if (user) {
            callback(parseUser(user))
        }
    } else {
        callback(null)
    }
}