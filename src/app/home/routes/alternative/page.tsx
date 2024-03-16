"use client"
import { useEffect, useState } from 'react';
import { Ruta } from '@/lib/constants/declarations';
import './alternative.scss';
import { SERVER_URL, ENDPOINTS } from '@/lib/constants/constants';
import { parseRouteList } from '@/lib/constants/utils';
import { UseGet } from '@/lib/hooks/fetchHook';
import SecondRouteCard from '@/system-design/molecules/SecondRouteCard';

const AlternativeRoutes = () => {
  const [alternativeRoutes, setAlternativeRoutes] = useState<Ruta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UseGet(SERVER_URL + ENDPOINTS.ROUTE.ALTERNATIVE_LIST);
        const parsedRoutes = parseRouteList(data.Data);
        setAlternativeRoutes(parsedRoutes);
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
          Aquí puedes encontrar una variedad de rutas alternativas para explorar diferentes lugares. Estas rutas ofrecen experiencias únicas y emocionantes para los amantes de la aventura y la exploración.
        </p>
      </div>
      <div className="route-title">
        <h2>Descubre Rutas Alternativas</h2>
        <p>Explora los rincones más destacados y poco convencionales</p>
      </div>
      <div className="alternative-routes-list">
        {alternativeRoutes.map((route) => (
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

export default AlternativeRoutes;
