'use client'
import { useRouter } from 'next/navigation';
import UserActions from '@/lib/context/hooks/userActions';
import { isUserAuthenticated, parseTicketList } from '@/lib/constants/utils';
import { Ticket, Usuario } from '@/lib/constants/declarations';
import './profile.scss';
import Button from '@/system-design/atoms/Button';
import Input from '@/system-design/atoms/Input';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { UseGet, UsePut } from '@/lib/hooks/fetchHook';
import { ENDPOINTS, SERVER_URL } from '@/lib/constants/constants';
import Link from 'next/link';
import swal from 'sweetalert';

export default function Profile() {

  const router = useRouter();
  const [canEdit, setCanEdit] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const { UseGetUser: user } = UserActions();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const driverDialogRef = useRef<HTMLDialogElement>(null);


  const handleUseTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("gola")
    driverDialogRef.current?.close()
    const ticketId = new FormData(e.currentTarget).get("ticketId") as string;
    if (!ticketId) return;
    try {

      await UsePut(SERVER_URL + ENDPOINTS.TICKET.USE + "?ticketId=" + ticketId, {}, {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      })
      swal("Ticket usado", "El ticket fue usado con éxito", "success");
    } catch (err) {
      console.error(err);
      swal("Error", "No se pudo usar el ticket", "error");
    }

  }


  const handleUseTicketClick = () => {
    driverDialogRef.current?.showModal();
  }

  useEffect(() => {
    isUserAuthenticated((user: Usuario) => {
      if (!user) {
        router.push("/home/join/login");
      }
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    async function getTickets() {
      try {
        const userToken = localStorage.getItem("user-token")!;
        const data = await UseGet(SERVER_URL + ENDPOINTS.TICKET.LIST, {
          Authorization: `Bearer ${userToken}`
        })
        const parsedTickets = parseTicketList(data.Data);
        setTickets(parsedTickets);
      } catch (error) {
        console.error(error);
      }
    }
    getTickets();
  }, [user]);

  const handleEditProfileClick = () => {
    setCanEdit(!canEdit);
  };
  const handleImageError = () => {
    if (!imageRef.current) return;
    imageRef.current.src = "https://th.bing.com/th/id/R.8dff49985d0d8afa53751d9ba8907aed?rik=7clxEmBk65lU2A&pid=ImgRaw&r=0";
  }


  return (
    <main className="profile-container">
      <header className="profile-description">
        <section className="profile-description-text">
          <h3 className="profile-title">{user.Nombre}</h3>
          <p className="profile-description-text">Aquí puedes administrar tu información personal y controlar quién puede acceder a ella.</p>
        </section>
        <img
          className="profile-image"
          ref={imageRef}
          src={user?.FotoPerfil ? user.FotoPerfil : "/Images/user.png"}
          onError={handleImageError}
          alt="Foto de perfil"
        />
        {/* <Button
          action={handleEditProfileClick}
          content="Editar perfil"
          className="edit-profile"
        /> */}

      </header>
      <div className="profile-details">
        <h4 className="username-display">Detalles de tu cuenta</h4>
        <section className="profile-info">
          <article className="profile-input-container">
            <FaMapMarkerAlt className="input-icon" />
            <p>{user?.ID_Usuario ?? "usuario@ejemplo.com"}</p>

          </article>
          <article className="profile-input-container">
            <FaEnvelope className="input-icon" />
            <p>{user?.CorreoElectronico ?? "usuario@ejemplo.com"}</p>
          </article>
          <article className="profile-input-container">
            <FaPhoneAlt className="input-icon" />
            <p>{user?.Teléfono ?? "000-000-0000"}</p>
          </article>
          <article className="profile-input-container">
            <FaMapMarkerAlt className="input-icon" />
            <p>{user?.Rol ?? "Usuario"}</p>
          </article>
          <article className="profile-input-container">
            <FaMapMarkerAlt className="input-icon" />
            <p>{user?.Dirección ?? "Dirección"}</p>
          </article>
        </section>
      </div>
      <section className="tickets-section">
        <h3 className="tickets-title">Mis Tickets</h3>
        {tickets && tickets.length > 0 ? (
          <ul className="ticket-list">
            {tickets.map((ticket) => (
              <Link href={`/buy/payment?IdTicket=${ticket.ID_Ticket}`} key={ticket.ID_Ticket} className="ticket-item">
                <em>codigo: {ticket.ID_Ticket}</em>
                <strong className='estado-y-precio' title={ticket.Estado}>
                  {
                    ticket.Estado?.toLocaleLowerCase() === "pendiente" && <>🟡</>
                  }
                  {
                    ticket.Estado?.toLocaleLowerCase() === "cancelado" && <>🔴</>
                  }
                  {
                    ticket.Estado?.toLocaleLowerCase() === "activo" && <>🟢</>
                  }
                  {
                    ticket.Estado?.toLocaleLowerCase() === "usado" && <>🔵</>
                  }

                  <p className="ticket-title">{ticket.Precio}$</p>
                </strong>
                <p className="ticket-date">fecha: {ticket.FechaCompra.toString()}</p>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="no-tickets-message">No hay tickets disponibles.</p>
        )}
      </section>



      <section className="delete-account">
        <Button
          action={() => dialogRef.current?.showModal()}
          content="Eliminar cuenta"
          className="delete-account-button"
        />
      </section>

      <div className="dialog-container">
        <div className="dialog-background">
          <dialog ref={dialogRef} className="dialog-content">
            <h3>Eliminar cuenta</h3>
            <p>¿Estás seguro de que quieres eliminar tu cuenta?</p>
            <div className="dialog-buttons">
              <Button action={() => dialogRef.current?.close()} content="Cancelar" className="cancel-delete" />
              <Button content="Eliminar" className="confirm-delete" />
            </div>
          </dialog>
        </div>
      </div>

      {user.Rol === "cliente" && <Link href="/work" className='work-button'>
        Quieres trabajar como conductor?
      </Link>}
      {
        user.Rol === "conductor" &&
        <>
          <Button action={handleUseTicketClick} className='work-button' content="Usar ticket de un cliente" />
          <dialog className='driver-dialog' ref={driverDialogRef}>
            <form onSubmit={handleUseTicket} className="use-ticket">
              <p>ingresa el codigo del ticket que aparece en el perfil del cliente</p>
              <Input name="ticketId" type="text" placeholder="ID del ticket" />
              <Button content="Usar ticket" submit />
            </form>
          </dialog>
        </>
      }
    </main>
  )
}