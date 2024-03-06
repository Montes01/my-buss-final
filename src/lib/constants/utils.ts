import { type route, type company, type user } from "./declarations"

import { decode } from "jsonwebtoken";

export function parseUser(user: any): user {
    //validate camps
    if (user.Nombre === undefined) throw new Error("nombre is required")
    if (user.Apellido === undefined) throw new Error("apellido is required")
    if (user.Correo === undefined) throw new Error("correo is required")
    if (user.Documento === undefined) throw new Error("documento is required")
    if (user.Foto === undefined) throw new Error("foto is required")
    if (user.Telefono === undefined) throw new Error("telefono is required")
    if (user.Rol === undefined) throw new Error("rol is required")
    if (user.Edad === undefined) throw new Error("edad is required")

    return {
        nombre: user.Nombre,
        apellido: user.Apellido,
        correo: user.Correo,
        documento: user.Documento,
        foto: user.Foto,
        telefono: user.Telefono,
        rol: user.Rol,
        edad: user.Edad,
    }
}
export function readToken(token: string): user {
    const user = decode(token)
    if (user === null) throw new Error("invalid token")
    return parseUser(user)
}
export const parseCompany = (company: any): company => {
    if (company.IdEmpresa === undefined) throw new Error("idEmpresa is required")
    if (company.Nombre === undefined) throw new Error("nombre is required")
    if (company.Correo_electronico === undefined) throw new Error("correo_electronico is required")
    if (company.Imagen === undefined) throw new Error("imagen is required")
    if (company.Telefono === undefined) throw new Error("telefono is required")
    if (company.Ubicacion === undefined) throw new Error("ubicacion is required")
    return {
        idEmpresa: company.IdEmpresa,
        nombre: company.Nombre,
        correo_electronico: company.Correo_electronico,
        imagen: company.Imagen,
        telefono: company.Telefono,
        ubicacion: company.Ubicacion,
    }
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