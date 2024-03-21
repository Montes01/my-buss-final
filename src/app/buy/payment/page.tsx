"use client"
import { ENDPOINTS, SERVER_URL } from '@/lib/constants/constants';
import { Empresa, Ticket } from '@/lib/constants/declarations';
import { parseCompany, parseSingleTicket } from '@/lib/constants/utils';
import { UseGet, UsePost, UsePut } from '@/lib/hooks/fetchHook';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import { UseAppSelector } from '@/lib/context/hooks';
import Input from '@/system-design/atoms/Input';
import Button from '@/system-design/atoms/Button';
import "./payment.scss"
const Page = () => {
  const [IdTicket, setIdTicket] = useState(null as number | null);
  const [Ticket, setTicket] = useState({} as Ticket);
  const [company, setCompany] = useState({} as Empresa)
  const user = UseAppSelector(state => state.user);
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(function () {
    if (location) {
      var searchParams = new URLSearchParams(location.search);
      var id = Number(searchParams.get('IdTicket'));
      setIdTicket(id);
    }
  }, [])

  useEffect(() => {

    async function getTicket() {
      if (!IdTicket) return;
      try {
        const data = await UseGet(SERVER_URL + ENDPOINTS.TICKET.GET + `?ID_Ticket=${IdTicket}`, {
          Authorization: `Bearer ${localStorage.getItem("user-token")}`
        })
        const parsedTicket = parseSingleTicket(data.Data)

        if (parsedTicket.Estado?.toLowerCase() !== "pendiente") {
          swal("Gracias " + user.Nombre + " 😉", "Su ticket ya fue pagado previamente", "success")
          router.push("/home/profile")
        }
        setTicket(parsedTicket)

      } catch (error) {
        console.error(await error);
      }
    }
    getTicket();
  }, [IdTicket])

  useEffect(() => {
    if (!Ticket?.ID_Empresa) {
      return;
    }
    async function getCompany() {
      try {
        const data = await UseGet(SERVER_URL + ENDPOINTS.COMPANY.GET + `?ID_Empresa=${Ticket.ID_Empresa}`)
        const parsedCompany = parseCompany(data.Data)
        setCompany(parsedCompany)
      } catch (error) {
        console.error(await error);
      }
    }
    getCompany();

  }, [Ticket])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dialogRef.current?.showModal()
  }
  const handleConfirm = async () => {
    const token = localStorage.getItem("user-token");
    const data = Ticket
    try {
      await UsePut(SERVER_URL + ENDPOINTS.TICKET.PAY, data, { Authorization: `Bearer ${token}` })
      swal("Pago exitoso", "Tu ticket ha sido pagado con éxito", "success")
      router.push("/home/profile")
    } catch (error) {
      console.error(await error);
      swal("Error", "No se ha podido realizar el pago", "error")
    }
  }

  return (<>
    <main className='ticket-payment-main'>
      <form onSubmit={handleSubmit} className="ticket-pay-form">
        <fieldset>
          <legend>Paga tu ticket aqui</legend>
          <Input
            pattern='^3[47][0-9]{13}$'
            required
            label='Tarjeta de debito/crédito'
            placeholder='0000-0000-0000-0000'
            name='Tarjeta de credito'
            type='number' />
          <Input
            required
            label='Fecha de expiración'
            placeholder='MM/YY'
            name='Fecha de expiración'
            type='number' />
          <Input
            required
            label='CVV'
            placeholder='000'
            name='CVV'
            type='number' />
        </fieldset>
        <Button submit content={Ticket.Precio + "$"} />
      </form>
      <section className="pay-ticket-image">
        <img src={company?.Logo} alt="" />
      </section>
    </main>
    <dialog ref={dialogRef} className='confirm-buy-dialog'>
      <h1>Confirma tu pago</h1>
      <p>¿Estas seguro de pagar este ticket?</p>
      <div className="dialog-pay-buttons">

        <Button content='Pagar' action={handleConfirm} />
        <Button content='Cancelar' submit />
      </div>
    </dialog>
  </>
  );
}

export default Page;
