
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