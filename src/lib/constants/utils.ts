import { Conductor, Empresa, Paradero, Ruta, Ticket, Usuario } from "./declarations"

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

export function parseUserFromRequest(user: any): Usuario {
    if (!user) throw new Error("Usuario inválido");
    if (!user.iD_Usuario) throw new Error("ID de usuario inválido");
    if (!user.nombre) throw new Error("Nombre de usuario inválido");
    if (!user.correoElectronico) throw new Error("Correo electrónico de usuario inválido");
    if (!user.teléfono) throw new Error("Número de teléfono de usuario inválido");
    return {
        ID_Usuario: user.iD_Usuario,
        Nombre: user.nombre,
        CorreoElectronico: user.correoElectronico,
        Teléfono: user.teléfono,
        Contraseña: undefined,
        FotoPerfil: user.fotoPerfil ? user.fotoPerfil : "empty",
        Dirección: user.dirección ? user.dirección : "empty",
        Rol: user.rol ? user.rol : "Usuario"

    }
}
export function parseUserList(users: any[]): Usuario[] {
    return users.map(user => parseUserFromRequest(user))
}

export function parseCompany(company: any): Empresa {
    if (!company) throw new Error("Empresa inválida");
    if (!company.iD_Empresa) throw new Error("ID de empresa inválido");
    if (!company.nombre) throw new Error("Nombre de empresa inválido");
    if (!company.correoElectronico) throw new Error("Correo electrónico de empresa inválido");
    if (!company.teléfono) throw new Error("Número de teléfono de empresa inválido");
    if (!company.logo) throw new Error("Logo de empresa inválido");
    if (!company.dirección) throw new Error("Dirección de empresa inválida");

    return {
        ID_Empresa: company.iD_Empresa,
        Nombre: company.nombre,
        CorreoElectronico: company.correoElectronico,
        Logo: company.logo,
        Dirección: company.dirección,
        Teléfono: company.teléfono,
        Contraseña: company.contraseña ? company.contraseña : "empty"
    }
}

export function parseCompanyList(companies: any[]): Empresa[] {
    return companies.map(company => parseCompany(company))
}

export const parseDriver = (driver: any): Conductor => {

    if (!driver) throw new Error("Conductor inválido");
    if (!driver.iD_Conductor) throw new Error("ID de conductor inválido");
    if (!driver.iD_Usuario) throw new Error("ID de usuario inválido");

    return {
        ID_Conductor: driver.iD_Conductor,
        ID_Usuario: driver.iD_Usuario,
        Estado: driver.estado ? driver.estado : "empty",
        LicenciaConducción: driver.fotoLicencia ? driver.fotoLicencia : "empty",
        FechaContrato: driver.fechaContrato ? driver.fechaContrato : "empty",
        HorarioTrabajo: driver.horarioTrabajo ? driver.horarioTrabajo : "empty"
    }
}

export const parseDriverList = (drivers: any[]): Conductor[] => {
    return drivers.map(driver => parseDriver(driver))
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
            callback(company as Empresa)
        }
    } else {
        callback(null)
    }
}

export const parseSingularRoute = (route: any): Ruta => {
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
        Descripción: route.descripción ? route.descripción : "empty",
        Horario: route.horario ? route.horario : "empty",
        Tarifa: route.tarifa
    }
}

export const parseRouteList = (routes: any[]): Ruta[] => {
    return routes.map(route => parseSingularRoute(route))
}

export const parseSingleStop = (stop: any): Paradero => {
    if (!stop) throw new Error("Paradero inválido");
    if (!stop.iD_Paradero) throw new Error("ID de paradero inválido");
    if (!stop.nombre) throw new Error("Nombre de paradero inválido");

    return {
        ID_Paradero: stop.iD_Paradero,
        Nombre: stop.nombre,
        Descripción: stop.descripción ? stop.descripción : "empty",
        Foto: stop.foto ? stop.foto : "empty",
        Ubicación: stop.ubicación ? stop.ubicación : "empty"
    }
}
export const parseStopList = (stops: any[]): Paradero[] => {
    return stops.map(stop => parseSingleStop(stop))
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

export const parseSingleTicket = (ticket: any): Ticket => {
    if (!ticket) throw new Error("Ticket inválido");
    if (!ticket.iD_Ticket) throw new Error("ID de ticket inválido");
    if (!ticket.iD_Usuario) throw new Error("ID de usuario inválido");
    if (!ticket.iD_Empresa) throw new Error("ID de empresa inválido");
    if (!ticket.fechaCompra) throw new Error("Fecha de compra inválida");
    if (!ticket.precio) throw new Error("Precio de ticket inválido");
    if (!ticket.estado) throw new Error("Estado de ticket inválido");

    return {
        ID_Ticket: ticket.iD_Ticket,
        ID_Usuario: ticket.iD_Usuario,
        ID_Empresa: ticket.iD_Empresa,
        FechaCompra: ticket.fechaCompra,
        Precio: ticket.precio,
        TipoPago: ticket.tipoPago,
        Estado: ticket.estado
    }
}

export const parseTicketList = (tickets: any[]): Ticket[] => {
    return tickets.map(ticket => parseSingleTicket(ticket))
}


export const handleImageError = (e: any) => {
    e.target.src = "/Images/user.png";
}