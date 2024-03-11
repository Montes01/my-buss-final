import { Empresa, Usuario, Response, Paradero, Ruta } from "./declarations";
export function routesMock() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    numeroR: 1,
                    inicioR: "Calle 123",
                    finR: "Carrera 123",
                    estadoR: true,
                    fkIdEmpresa: 1,
                },
                {
                    numeroR: 2,
                    inicioR: "Calle 123",
                    finR: "Carrera 123",
                    estadoR: false,
                    fkIdEmpresa: 1,
                },
                {
                    numeroR: 3,
                    inicioR: "Calle 123",
                    finR: "Carrera 123",
                    estadoR: true,
                    fkIdEmpresa: 1,
                },
            ]);
        }, 1000);
    })
}
export function EmpresasMock():Promise<Response> {
    return new Promise((resolve) => {
        const empresas: Empresa[] = [
            {
                iD_Empresa: 0,
                nombre: "Cooburquin",
                correoElectronico: "Cooburquin@gmail.com",
                contraseña: "empty",
                logo: "https://th.bing.com/th?id=OIP.GIL4pvhe2xd4nCwDfKJxzwHaGR&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                dirección: "Av. Principal #123, Armenia",
                teléfono: "123456789"
            },
            {
                iD_Empresa: 1,
                nombre: "Buses Armenia",
                correoElectronico: "BASA@gmail.com",
                contraseña: "empty",
                logo: "https://www.mybus.io/wp-content/uploads/2020/10/maasify.svg",
                dirección: "Calle Principal #456, Ciudad",
                teléfono: "123456789"
            },
            {
                iD_Empresa: 2,
                nombre: "TUCM",
                correoElectronico: "TUCM@gmail.com",
                contraseña: "empty",
                logo: "https://tucm.com.co/wp-content/uploads/2021/04/tucm.png",
                dirección: "Calle Principal #456, Ciudad",
                teléfono: "123456789"
            }
        ];

        setTimeout(function () { resolve( {Data: empresas, Message: "empresas listadas correctamente"}), 200 })
    })
}
export function loginMock(email: string, password: string) {
    const exampleUser: Usuario = {
        ID_Usuario: 1,
        Nombre: "Juanito",
        CorreoElectronico: "juanito@gmail.com",
        Teléfono: "123456789",
        Contraseña: "123456",
    }

    return new Promise((resolve, reject) => {

        if (email === exampleUser.CorreoElectronico && password === exampleUser.Contraseña) {
            setTimeout(function () { resolve({ Data: { token: "example token" }, Message: "autorizado correctamente" } as Response), 200 })
        } else {
            setTimeout(function () { reject({ Data: {}, Message: "Usuario o contraseña no encontrados" } as Response), 200 })
        }
    })
}

export function decodeTokenMock(_: string) {
    return {
        ID_Usuario: 1,
        Nombre: "Juanito",
        CorreoElectronico: "juanito@gmail.com",
        Teléfono: "123456789",
        Contraseña: "123456",
        Dirección: "Calle 123",
        FotoPerfil: "https://th.bing.com/th/id/OIP.GIL4pvhe2xd4nCwDfKJxzwHaGR?pid=ImgDet&rs=1",
        Rol: "Usuario"
    }
}

export function paradasMock(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            const paradas: Paradero[] = [
                {
                    ID_Paradero: 1,
                    Nombre: 'Parada 1',
                    Ubicación: 'Latitud: 123, Longitud: 456',
                    Descripción: 'Descripción de la Parada 1',
                    Foto: "https://th.bing.com/th/id/R.ece20a357c0ec4da21ab1bcd71ad9d78?rik=vbbAKsvPT3%2bkcg&pid=ImgRaw&r=0"
                },
                {
                    ID_Paradero: 2,
                    Nombre: 'Parada 2',
                    Ubicación: 'Latitud: 789, Longitud: 012',
                    Descripción: 'Descripción de la Parada 2',
                    Foto: "https://www.armenia.gov.co/wp-content/uploads/MARIO_FERNANDO_PARADERO_AMABLE.JPG"
                },
                {
                    ID_Paradero: 3,
                    Nombre: 'Parada 3',
                    Ubicación: 'Latitud: 345, Longitud: 678',
                    Descripción: 'Descripción de la Parada 3',
                    Foto: "https://transmisoraquindio.com/wp-content/uploads/2021/07/IMG_20210707_090011_728-1920x1000.jpg"
                }
            ];
            resolve({ Data: paradas, Message: "Paradas encontradas" });
        }, 200);
    });
}

export function getParadaPorIdMock(id: number): Promise<Response> {

    return new Promise((resolve, reject) => {
        if (id > 3 || id < 1) {
            reject({ Data: null, Message: "Parada no encontrada" });
        }
        setTimeout(() => {
            const parada: Paradero = {
                ID_Paradero: id,
                Nombre: 'Parada 1',
                Ubicación: 'Latitud: 123, Longitud: 456',
                Descripción: 'Descripción de la Parada 1',
                Foto: "https://th.bing.com/th/id/R.ece20a357c0ec4da21ab1bcd71ad9d78?rik=vbbAKsvPT3%2bkcg&pid=ImgRaw&r=0"
            };
            resolve({ Data: parada, Message: "Parada encontrada" });
        }, 200);
    });
}

export function getRutasPorParada(id: number): Promise<Response> {

    return new Promise((resolve, reject) => {
        if (id > 3 || id < 1) {
            reject({ Data: null, Message: "Parada no encontrada" });
        }

        setTimeout(() => {
            const rutas = [
                {
                    ID_Ruta: id,
                    Nombre: "Ruta 1",
                    Tipo: "Urbana",
                    Descripción: "Ruta urbana 1",
                    Horario: "5:00 am - 10:00 pm",
                    Tarifa: 2000
                },
                {
                    ID_Ruta: id,
                    Nombre: "Ruta 2",
                    Tipo: "Urbana",
                    Descripción: "Ruta urbana 2",
                    Horario: "5:00 am - 10:00 pm",
                    Tarifa: 2000
                },
                {
                    ID_Ruta: id,
                    Nombre: "Ruta 3",
                    Tipo: "Urbana",
                    Descripción: "Ruta urbana 3",
                    Horario: "5:00 am - 10:00 pm",
                    Tarifa: 2000
                }
            ];
            resolve({ Data: rutas, Message: "Rutas encontradas" });
        }, 200);
    });
}

export function getRutaMock(id: number): Promise<Response> {

    const exampleRuta: Ruta = {
        ID_Ruta: id,
        Nombre: "Ruta 1",
        Tipo: "Urbana",
        Descripción: "Ruta urbana 1",
        Horario: "5:00 am - 10:00 pm",
        Tarifa: 2700,
        ID_Empresa: 1
    }


    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ Data: exampleRuta, Message: "Ruta encontrada" });
        }, 200);
    })
}

export function getEmpresaPorIdMock(id: number): Promise<Response> {

    const exampleEmpresa: Empresa = {
        iD_Empresa: id,
        nombre: "Cooburquin",
        correoElectronico: "Cooburquin@gmail.com",
        contraseña: "empty",
        logo: "https://th.bing.com/th?id=OIP.GIL4pvhe2xd4nCwDfKJxzwHaGR&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        dirección: "Av. Principal #123, Armenia",
        teléfono: "123456789"
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ Data: exampleEmpresa, Message: "Empresa encontrada" });
        }, 200);
    })
}

export function getParaderosPorRutaMock(id: number): Promise<Response> {

    const paradas: Paradero[] =
        [
            {
                ID_Paradero: 1,
                Nombre: 'Parada 1',
                Ubicación: 'Latitud: 123, Longitud: 456',
                Descripción: 'Descripción de la Parada 1',
                Foto: "https://th.bing.com/th/id/R.ece20a357c0ec4da21ab1bcd71ad9d78?rik=vbbAKsvPT3%2bkcg&pid=ImgRaw&r=0"
            },
            {
                ID_Paradero: 2,
                Nombre: 'Parada 2',
                Ubicación: 'Latitud: 789, Longitud: 012',
                Descripción: 'Descripción de la Parada 2',
                Foto: "https://www.armenia.gov.co/wp-content/uploads/MARIO_FERNANDO_PARADERO_AMABLE.JPG"
            },
        ]

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ Data: paradas, Message: "Paradas encontradas" });
        }, 200);
    })
}