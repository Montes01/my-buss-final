"use server"
import { Ruta } from '@/lib/constants/declarations';
import './alternative.scss';
import { SERVER_URL, ENDPOINTS } from '@/lib/constants/constants';
import { parseRouteList } from '@/lib/constants/utils';
import { UseGet } from '@/lib/hooks/fetchHook';

const AlternativeRoutes = async () => {


  let alternativeRoutes: Ruta[] = []
  try {
    const data = await UseGet(SERVER_URL + ENDPOINTS.ROUTE.LIST)
    const parsedRoutes = parseRouteList(data.Data).filter(route => (route.Tipo?.toLowerCase()) !== "urbano")
    alternativeRoutes = parsedRoutes
  } catch (error) {
    console.error(error)
  }


  // Datos quemados para las rutas alternativas
  // const alternativeRoutes = [
  //   {
  //     id: 1,
  //     name: 'Ruta - 16',
  //     description: '16 de Villa Liliana de la empresa Cooburquin. Trayectoria de una hora.',
  //     distance: '10 km',
  //     difficulty: 'Moderada',
  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png', // Enlace al ícono de distancia
  //   },
  //   {
  //     id: 2,
  //     name: 'Ruta - 29',
  //     description: '29 Simón Bolívar de la empresa TUCM. Trayectoria de una hora y treinta minutos.',
  //     distance: '5 km',
  //     difficulty: 'Fácil',
  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Ruta - 4',
  //     description: '4 de Puerto Espejo de la empresa Buses Armenia. Trayectoria de dos horas.',
  //     distance: '15 km',
  //     difficulty: 'Difícil',
  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Ruta - 17',
  //     description: 'Viaja a través del tiempo mientras exploras los lugares históricos relacionados con el vino.',
  //     distance: '15 km',
  //     difficulty: 'Difícil',
  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Ruta - 10',
  //     description: 'Viaja a través del tiempo mientras exploras los lugares históricos relacionados con el vino.',
  //     distance: '15 km',
  //     difficulty: 'Difícil',
  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png',
  //   },
  //   {
  //     id: 6,
  //     name: 'Ruta - 23',
  //     description: 'Viaja a través del tiempo mientras exploras los lugares históricos relacionados con el vino.',
  //     distance: '15 km',
  //     difficulty: 'Difícil',

  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png',
  //   },
  //   {
  //     id: 7,
  //     name: 'Ruta - 27',
  //     description: 'Viaja a través del tiempo mientras exploras los lugares históricos relacionados con el vino.',
  //     distance: '15 km',
  //     difficulty: 'Difícil',

  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png',
  //   },
  //   {
  //     id: 8,
  //     name: 'Ruta - 9',
  //     description: 'Viaja a través del tiempo mientras exploras los lugares históricos relacionados con el vino.',
  //     distance: '15 km',
  //     difficulty: 'Difícil',

  //     distanceIcon: 'https://cdn-icons-png.flaticon.com/128/7509/7509075.png',
  //   },

  // ];

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
        {alternativeRoutes.map(route => (
          <div key={route.ID_Ruta} className="alternative-route">
            <h2>{route.Nombre}</h2>
            <p>{route.Descripción}</p>
            <div className="route-details">
              {/* <img src={route.distanceIcon} alt="Icono de distancia" /> */}
              <span>- {route.Tarifa}$ </span>
              <span>- {route.Tipo}</span>
            </div>
            <button className="route-button">Ver Ruta</button>

          </div>
        ))}
      </div>
    </div>


  );
};

export default AlternativeRoutes;
