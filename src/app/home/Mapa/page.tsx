// "use client";

// import React from 'react'
// import "./Mapa.scss";
// import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const center: { lat: number; lng: number } = { lat: 4.5434742, lng: -75.6829244 };
// const routes: { [key: string]: { name: string; coordinates: [number, number] } } = {
//   "La clarita": { name: "La clarita", coordinates: [4.5406412, -75.6874465] },
//   "Cra. 19 Cl. 21": { name: "Cra. 19 Cl. 21", coordinates: [4.535303, -75.675411] },
//   "SENA": { name: "SENA", coordinates: [4.541491, -75.668710] },
//   "Las palmas": { name: "Las palmas", coordinates: [4.543652, -75.666500] },
//   "Hotel Armenia": { name: "Hotel Armenia", coordinates: [4.5492282, -75.6602015] },
//   "Fundadores1": { name: "Fundadores1", coordinates: [4.5458975, -75.6624035] },
//   "Fundadores2": { name: "Fundadores2", coordinates: [4.5453379, -75.6625499] },
//   "Unicentro": { name: "Unicentro", coordinates: [4.5408396, -75.6646639] },
//   "U La Gran Colombia": { name: "U La Gran Colombia", coordinates: [4.5390133, -75.6664268] },
//   "Cra. 18 con Cl. 18": { name: "Cra. 18 con Cl. 18", coordinates: [4.535672, -75.6739303] },
//   "Centro": { name: "Centro", coordinates: [4.534761, -75.6749636] },
//   "Cra. 19 con Cl. 31": { name: "Cra. 19 con Cl. 31", coordinates: [4.5301684, -75.6811513] },
//   "Terminal": { name: "Terminal", coordinates: [4.5275315, -75.6836841] },
//   "El mirador la secreta": { name: "El mirador la secreta", coordinates: [4.5221992, -75.6846426] },
// };

// const Mapa: React.FC = () => {
//     return (
//       <><div className= "Mapaa">
//         <MapContainer center={center} zoom={13} className="map-container">
//           <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
  
//           {Object.entries(routes).map(([key, value], index) => (
//              <Marker key={index} position={value.coordinates} >
//               <Popup>{value.name}</Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//         </div>
//       </>
//     );
//   };
  
//   export default Mapa;