import { Empresa, Usuario } from "./declarations"

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
    if (!company.Teléfono) throw new Error("Número de teléfono de empresa inválido");
    if (!company.Logo) throw new Error("Logo de empresa inválido");
    if (!company.Dirección) throw new Error("Dirección de empresa inválida");

    return {
        ID_Empresa: company.ID_Empresa,
        Nombre: company.Nombre,
        CorreoElectronico: company.CorreoElectronico,
        Logo: company.Logo,
        Dirección: company.Dirección,
        Teléfono: company.Teléfono,
        Contraseña: company.Contraseña ? company.Contraseña : "empty"
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