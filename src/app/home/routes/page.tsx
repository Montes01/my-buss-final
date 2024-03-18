"use client"
import { useEffect, useState } from 'react';
import { Ruta } from '@/lib/constants/declarations';
import './_routes.scss';
import { SERVER_URL, ENDPOINTS } from '@/lib/constants/constants';
import { parseRouteList } from '@/lib/constants/utils';
import { UseGet } from '@/lib/hooks/fetchHook';
import SecondRouteCard from '@/system-design/molecules/SecondRouteCard';

const Routes = () => {
    const [routes, setRoutes] = useState<Ruta[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await UseGet(SERVER_URL + ENDPOINTS.ROUTE.LIST);
                const parsedRoutes = parseRouteList(data.Data);
                setRoutes(parsedRoutes);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="alternative-routes-container">
            <div className="page-description">
                <p>
                    Aqui tendras las rutas mas comunes y populares para que puedas disfrutar de la naturaleza y la aventura.

                </p>
            </div>
            <div className="route-title">
                <h2>Descubre las rutas mas comunes</h2>
                <p>Explora los rincones más transitados por toda la ciudad</p>
            </div>
            <div className="alternative-routes-list">
                {routes.map((route) => (
                    <SecondRouteCard
                        key={route.ID_Ruta}
                        ID_Empresa={route.ID_Empresa}
                        ID_Ruta={route.ID_Ruta}
                        Nombre={route.Nombre}
                        Tarifa={route.Tarifa}
                        Descripción={route.Descripción}
                        Horario={route.Horario}
                        Tipo={route.Tipo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Routes;
