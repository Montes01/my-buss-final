import { type user } from "./declarations"

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