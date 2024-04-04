"use client"
import { ENDPOINTS, SERVER_URL, STRIPE_API_KEY } from '@/lib/constants/constants';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { parseCompany, parseSingleTicket } from '@/lib/constants/utils';
import { useEffect, useRef, useState } from 'react';
import { Empresa, Ticket } from '@/lib/constants/declarations';
import { UseAppSelector } from '@/lib/context/hooks';
import { UseGet, UsePut } from '@/lib/hooks/fetchHook';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import Button from '@/system-design/atoms/Button';

export default function PaymentPage() {
  const elements = useElements();
  const stripe = useStripe()
  const [IdTicket, setIdTicket] = useState(null as number | null);
  const [Ticket, setTicket] = useState({} as Ticket);
  const [company, setCompany] = useState({} as Empresa)
  const user = UseAppSelector(state => state.user);
  const router = useRouter();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const paymentMethodResult = await stripe?.createPaymentMethod({
        type: 'card',
        card: elements?.getElement(CardElement)!,

      });
      if (paymentMethodResult?.error) {
        swal("Error", paymentMethodResult.error.message!, "error");
        return;
      }

      const token = localStorage.getItem("user-token");
      const data = {
        ID_Ticket: Ticket.ID_Ticket,
        Precio: Ticket.Precio,
        Estado: "Pagado",
        TipoPago: "Tarjeta",
        PaymentId: paymentMethodResult?.paymentMethod?.id,
        ID_Empresa: Ticket.ID_Empresa
      };
      await UsePut(SERVER_URL + ENDPOINTS.TICKET.PAY, data, {
        Authorization: `Bearer ${token}`
      });
      swal("Pago exitoso", "Su ticket ha sido pagado exitosamente", "success");
      router.push("/home/profile");
    } catch (error) {
      console.error(await error);
      swal("Error", "No se ha podido realizar el pago", "error");
    }
  }

  return (<>

<main className='Pagos'>
  <div className='TexTicket'>
    <h1>Aquí podrás pagar tu ticket</h1>
    <p className='ParrafoTicket'>
  Completa el pago de tu ticket de forma rápida y segura. Revisa los detalles del pago, ingresa la información de tu tarjeta de crédito y finaliza la transacción. Nuestro formulario garantiza la protección de tus datos personales y financieros. ¡Gracias por confiar en nosotros!
</p>
<div className='imagenesTickets'>
  <img src="https://cdn-icons-png.flaticon.com/128/3578/3578240.png" alt="" />
  <img src="https://cdn-icons-png.flaticon.com/128/2623/2623506.png" alt="" />
  <img src="https://cdn-icons-png.flaticon.com/128/1036/1036175.png" alt="" />
  <img src="https://em-content.zobj.net/source/apple/391/ticket_1f3ab.png" alt="" />
</div>
  </div>
  <form onSubmit={handleSubmit} className="ticket-pay-form">
    <fieldset>
      <legend>Paga tu ticket aquí</legend>
      <h2 className='company-name'>{company.Nombre}</h2>
      <section className="pay-ticket-image">
        <img src={company?.Logo} alt="Logo de la empresa" />
      </section>
      <div className="payment-details">
        <h3>Detalles del Pago</h3>
        <p>Precio: {Ticket.Precio} $</p>
      </div>
      <div className="credit-card-info">
        <h3>Información de la Tarjeta de Crédito</h3>
        <CardElement className='credit-card' />
      </div>
      <Button submit content={`Pagar ${Ticket.Precio} $`} />
    </fieldset>
  </form>
</main>


    {/* <form onSubmit={handleSubmit} className="ticket-pay-form">
      <fieldset>
        <legend>Paga tu ticket aqui</legend>
        <h2 className='company-name'>{company.Nombre}</h2>
        <section className="pay-ticket-image">
          <img src={company?.Logo} alt="" />
        </section>
        <CardElement className='credit-card' />
      </fieldset>
      <Button submit content={Ticket.Precio + "$"} />
    </form> */}
  </>
  );
}

