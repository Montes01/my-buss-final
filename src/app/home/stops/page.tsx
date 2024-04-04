import { Paradero } from "@/lib/constants/declarations";
import "./stops.scss";
import NavButton from "@/system-design/atoms/NavButton";
import { UseGet } from "@/lib/hooks/fetchHook";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { parseStopList } from "@/lib/constants/utils";

export default async function Stops() {
  let stops: Paradero[] = [];
  try {
    const data = await UseGet(SERVER_URL + ENDPOINTS.STOP.LIST);
    const parsedStops = parseStopList(data.Data);
    stops = parsedStops;
  } catch (error) {
    console.error(error);
    stops = [];
  }

  return (
    <main className="stops-page">
       <div className="section-header">
        <div className="title-and-text">
          <h2 className="title">Paraderos de la ciudad</h2>
          <p className="subtitle">
    Explora los paraderos disponibles en nuestra ciudad. Descubre los puntos de transporte
    clave que conectan diferentes áreas de la ciudad y facilitan la movilidad de los
    residentes y visitantes. ¡Encuentra información detallada sobre horarios, servicios y
    contactos para cada paradero y planifica tu viaje de manera conveniente!
  </p>        
          </div>
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1308342065/es/vector/mapa-de-ubicaci%C3%B3n-doblado-con-marcador-mapa-de-la-ciudad-con-puntero-pin-mapa-de-navegaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=WJDCd2E3XInstZgw0jk-5k3GHYibObrxJnYxZBvwstk=" alt="" />
        </div>
      </div>
      <div className="paraderos-amables">
  <h3>Paraderos Amables</h3>
  <div className="logos-paraderos">
    <img src="https://cdn-icons-png.flaticon.com/128/4144/4144469.png" alt="" />
    <img src="https://cdn-icons-png.flaticon.com/128/1042/1042314.png" alt="" />
    <img src="https://cdn-icons-png.flaticon.com/128/9830/9830523.png" alt="" />
    <img src="https://cdn-icons-png.flaticon.com/128/2183/2183559.png" alt="" />
    <img src="https://cdn-icons-png.flaticon.com/128/1381/1381993.png" alt="" />
    <img src="https://cdn-icons-png.flaticon.com/128/10972/10972393.png" alt="" />
  </div>
</div>

      <section className="stop-list">
        {stops.map(({ ID_Paradero, Nombre, Foto }) => (
          <section key={ID_Paradero} className="stop">
            {/* <div className="map-container">
              <img src={Foto} alt={Nombre} className="map" />
            </div> */}
            <div className="content">
              <h3 className="Ti">{Nombre}</h3>
              <p><strong>Horarios:</strong> Lunes a Viernes: 7am - 10pm, Sábados y Domingos: 9am - 8pm</p>
              <p><strong>Servicios:</strong> Wi-Fi gratuito, Baños, Asientos cómodos</p>
              <div className="logos-servicios">
              <img className="silla" src="https://cdn-icons-png.flaticon.com/128/3267/3267486.png" alt="" />  
              <img src="https://cdn-icons-png.flaticon.com/128/5593/5593622.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/3220/3220610.png" alt="" />        
              </div>
              <NavButton to={`/home/stops/${ID_Paradero}`} content="Ver paradero" className="button" />
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

// "use server"
// import { Paradero } from "@/lib/constants/declarations"
// import { paradasMock } from "@/lib/constants/mocks"
// import "./stops.scss"
// import NavButton from "@/system-design/atoms/NavButton"
// import { UseGet } from "@/lib/hooks/fetchHook"
// import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants"
// import { parseStopList } from "@/lib/constants/utils"

// export default async function Stops() {
//     let stops: Paradero[] = []
//     try {
//         const data = await UseGet(SERVER_URL + ENDPOINTS.STOP.LIST)
//         const parsedStops = parseStopList(data.Data)
//         stops = parsedStops
//     } catch (error) {
//         console.error(error)
//         stops = []
//     }

//     return (
//       <main className="stops-page">
//   <div className="section-header">
//     <h2 className="title">Paraderos de la ciudad</h2>
//     <p className="subtitle">Explora los paraderos disponibles en nuestra ciudad</p>
//   </div>
//   <section className="stop-list">
//     {stops.map(({ ID_Paradero, Nombre, Descripcion, Contacto, Foto }) => (
//       <section key={ID_Paradero} className="stop">
//         <div className="map-container">
//           <img
//             src={'https://th.bing.com/th/id/R.d295c583453dcfe817fc5b8eb10e054c?rik=ysg9AsqUb47MYQ&pid=ImgRaw&r=0'}
//             alt={Nombre}
//             className="map"
//           />
//         </div>
//         <div className="content">
//           <h3>{Nombre}</h3>
//           <p>{Descripcion}</p>
//           <p><strong>Horarios:</strong> Lunes a Viernes: 7am - 10pm, Sábados y Domingos: 9am - 8pm</p>
//           <p><strong>Servicios:</strong> Wi-Fi gratuito, Baños, Asientos cómodos</p>
//           <p><strong>Contacto:</strong> {Contacto}</p>
//           {/* Agrega íconos de servicios */}
//           <div className="services-icons">
//             {/* Aquí coloca los íconos según los servicios disponibles */}
//           </div>
//           <NavButton to={`/home/stops/${ID_Paradero}`} content="Ver paradero" className="button" />
//         </div>
//       </section>
//     ))}
//   </section>
// </main>
// )
// }   


      //         <main className="stops-page">
//   <div className="section-header">
//     <h2 className="title">Paraderos de la ciudad</h2>
//     <p className="subtitle">Explora los paraderos disponibles en nuestra ciudad</p>
//   </div>
//   <section className="stop-list">
//     {stops.map(({ ID_Paradero, Nombre, Foto }) => (
//       <section key={ID_Paradero} className="stop">
//         <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" className="stop-location" />
//         <div className="content">
//           <h3>{Nombre}</h3>
//           <img src={Foto} alt="" className="stop-image" />
//           <NavButton to={`/home/stops/${ID_Paradero}`} content="Ver paradero" className="button" />
//         </div>
//       </section>
//     ))}
//   </section>
// </main>
