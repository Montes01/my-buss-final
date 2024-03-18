"use client"
import { useState, useEffect } from "react";
import { ENDPOINTS, PROJECT_NAME, SERVER_URL } from "@/lib/constants/constants";
import { Empresa } from "@/lib/constants/declarations";
import { EmpresasMock } from "@/lib/constants/mocks";
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
import "./buy.scss";
import { UseGet, UsePost } from "@/lib/hooks/fetchHook";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
export default function Buy() {
    const [empresas, setEmpresas] = useState<Empresa[] | null>(null);
    const router = useRouter();
    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await UseGet(SERVER_URL + ENDPOINTS.COMPANY.LIST);
                console.log(fetchedData);
                setEmpresas(fetchedData.Data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleBuy = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const token = localStorage.getItem("user-token");
        const ID_Empresa = formData.get("iD_Empresa");
        const Precio = 2700;
        const Estado = "Activo";
        const TipoPago = "Transferencia";
        const data = {
            ID_Empresa,
            Precio,
            Estado,
            TipoPago,
        };
        console.log(data)
        try {
            const res = await UsePost(SERVER_URL + ENDPOINTS.TICKET.ADD, data, { Authorization: `Bearer ${token}` });
            console.log(res);   
            await swal("Compra exitosa", "Tu pasaje ha sido comprado con éxito, Revisa tu correo", "success");
            router.push("/home")
        } catch (error) {
            console.log(await error);
            swal("Error", "No se ha podido realizar la compra", "error");
        }


    }

    return (
        <main className="buy-page">
    <section className="container_T_I">
    <section className="payment-text">
        <h3>Tu viaje comienza en {PROJECT_NAME}</h3> <br />
        <p>       
        -Encuentra el pasaje en bus más económico. <br />
        -Accede a las mejores promociones y descuentos. <br />
        -Comparación de ofertas de diferentes empresas de transporte. <br />
        -Facilidad para encontrar información sobre destinos. <br />
        -Compra segura de tus tiquetes con MyBuss. <br />
         </p>
    </section>
    <div className="Tienda">
        <img src="https://www.busbud.com/pubweb-assets/images/loyalty/c8fb771.wallet.svg" alt="" />
    </div>
    </section>
    <section className="grid-container">
  <div className="card">
    <img src="https://www.busbud.com/pubweb-assets/images/usp/ea117d2.usp-trust.svg" alt="" />
    <p>Confianza de millones de viajeros al año.</p>
  </div>
  <div className="card">
    <img src="https://www.busbud.com/pubweb-assets/images/usp/ff97db8.usp-coverage.svg" alt="" />
    <p>2 millones de rutas en 80+ países.</p>
  </div>
  <div className="card">
    <img src="https://www.busbud.com/pubweb-assets/images/usp/c41f858.usp-support.svg" alt="" />
    <p>Soporte especializado en todo momento.</p>
  </div>
</section>


        <section className="pay-methods">
          <h4>
            Todas las formas de pago <br /> <strong>Compras 100% seguras</strong>
          </h4>
          <section className="pay-methods-icons">
            <img src="https://i.pinimg.com/originals/cb/0a/41/cb0a415465fcee4abb64ec1e0403a377.png" alt="PayPal" />
            <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG16.png" alt="Mastercard" />
            <img src="https://th.bing.com/th/id/R.ec4bee918a997aa7b86de0c38da66deb?rik=lc0DmGNippGWmA&riu=http%3a%2f%2fwww.timon.com.co%2fwp-content%2fuploads%2fEfecty.png&ehk=sH%2bBzR6ihiCBc0HQ50t5G9XWvSHFpu3RjfNeCFGwqzg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Efecty" />
          </section>
        </section>
        <section className="FormularioPago">
          <h2>Compra tus pasajes aquí <strong>sin tener que salir de casa</strong></h2>
          <section className="buy-row">
            <img src="/Images/ticket.jpg" alt="" className="ticket" />
             <form onSubmit={handleBuy} className="buy-form">
                        <label className="input-wrapper">
                            Empresa
                            <select name="iD_Empresa" id="" className="company">
                                <option value="" disabled>
                                    Selecionar empresa
                                </option>
                                {empresas &&
                                    empresas.map((empresa) => (
                                        <option key={empresa.iD_Empresa} value={empresa.iD_Empresa}>
                                            {empresa.nombre}
                                        </option>
                                    ))}
                            </select>
                        </label>
                        <Input type="date" label="Fecha de salida" />
                        <Button submit className="buy-button" content="Comprar" />
                    </form>
          </section>
        </section>
  
  
      </main>
    
    );
}