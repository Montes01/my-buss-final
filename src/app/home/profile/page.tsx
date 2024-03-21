  'use client'
  import { useRouter } from 'next/navigation';
  import UserActions from '@/lib/context/hooks/userActions';
  import { isUserAuthenticated } from '@/lib/constants/utils';
  import { Usuario } from '@/lib/constants/declarations';
  import './profile.scss';
  import Button from '@/system-design/atoms/Button';
  import Input from '@/system-design/atoms/Input';
  import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
  import { useState, useRef, useEffect } from 'react';

  export default function Profile() {

    const router = useRouter();
    const [canEdit, setCanEdit] = useState(false);
    const { UseGetUser: user } = UserActions();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      isUserAuthenticated((user: Usuario) => {
        if (!user) {
          router.push("/home/join/login");
        }
      });
    }, []);

    const handleEditProfileClick = () => {
      setCanEdit(!canEdit);
    };


    return (
        <>
        <main className='container-perfil'>

        <section className="profile-container">
        <div className="profile-description">
  <h3 className="profile-title">Perfil y visibilidad</h3>
  <p className="profile-description-text">Aquí puedes administrar tu información personal y controlar quién puede acceder a ella.</p>
  <div className="profile-image">
  <img
    ref={imageRef}
    src={user?.FotoPerfil ? user.FotoPerfil : "/Images/user.png"}
    onError={() => {
      if (!imageRef.current) return;
      imageRef.current.src = "https://th.bing.com/th/id/R.8dff49985d0d8afa53751d9ba8907aed?rik=7clxEmBk65lU2A&pid=ImgRaw&r=0";
    }}
    alt="Foto de perfil"
  />
</div>
<div className="edit-profile-button">
  <Button
    action={handleEditProfileClick}
    content="Editar perfil"
    className="edit-profile"
  />
</div>

</div>
  <main className="main-profile">
    <div className="profile-info">
      <div className="profile-details">
        <h4 className="username-display">{user?.Nombre}</h4>
        <form className="profile-form">
          <div className="profile-input-container">
            <FaMapMarkerAlt className="input-icon" />
            <Input
              readonly={!canEdit}
              type="text"
              label="Dirección"
              className="profile-input"
              defaultValue={user.Dirección}
            />
          </div>
          <div className="profile-input-container">
            <FaEnvelope className="input-icon" />
            <Input
              readonly={!canEdit}
              type="email"
              label="Correo electrónico"
              className="profile-input"
              defaultValue={user.CorreoElectronico}
            />
          </div>
          <div className="profile-input-container">
            <FaPhoneAlt className="input-icon" />
            <Input
              readonly={!canEdit}
              type="tel"
              label="Teléfono"
              className="profile-input"
              defaultValue={user.Teléfono}
            />
          </div>
          <div className="profile-input-container">
            <FaMapMarkerAlt className="input-icon" />
            <Input
              readonly={!canEdit}
              type="text"
              label="Rol"
              className="profile-input"
              defaultValue={user.Rol}
            />
          </div>
          <div className="profile-input-container">
            <FaMapMarkerAlt className="input-icon" />
            <Input
              readonly={!canEdit}
              type="text"
              label="Nombre"
              className="profile-input"
              defaultValue={user.Nombre}
            />
          </div>
          {canEdit && <Button content="Guardar" className="save-profile-btn" />}
        </form>
      </div>
    </div>
    {/* <section className="tickets-section">
  <h3 className="tickets-title">Mis Tickets</h3>
  {user && user.tickets && user.tickets.length > 0 ? (
    <ul className="ticket-list">
      {user.tickets.map((ticket) => (
        <li key={ticket.id} className="ticket-item">
          <p className="ticket-title">{ticket.title}</p>
          <p className="ticket-date">{ticket.date}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-tickets-message">No hay tickets disponibles.</p>
  )}
</section> */}
<section className="delete-account">
  <Button
    action={() => dialogRef.current?.showModal()}
    content="Eliminar cuenta"
    className="delete-account-button"
  />
</section>

  </main>

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
</section>
</main>
      </>
    )   
  }