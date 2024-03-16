"use server"

import { ENDPOINTS, PROJECT_NAME, SERVER_URL } from "@/lib/constants/constants"
import { Empresa } from "@/lib/constants/declarations"
import { EmpresasMock } from "@/lib/constants/mocks"
import Button from "@/system-design/atoms/Button"
import Input from "@/system-design/atoms/Input"
import "./buy.scss"
import { UseGet } from "@/lib/hooks/fetchHook"
export default async function Buy() {
    let empresas: Empresa[] | null = null
    try {
        const empresasData = await EmpresasMock()
        const fetchedData = await UseGet(SERVER_URL + ENDPOINTS.COMPANY.LIST)
        console.log(fetchedData)
        empresas = fetchedData.Data;
    } catch (error) {
        console.log(error)
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
            <form className="buy-form">
              <label className="input-wrapper">
                Empresa
                <select name="" id="" className="company">
                  <option value="" disabled>Seleccionar empresa</option>
                  {empresas && empresas.map(empresa => <option key={empresa.iD_Empresa} value={empresa.iD_Empresa}>{empresa.nombre}</option>)}
                </select>
              </label>
              <Input type="date" label="Fecha de salida" />
              <Button submit className="buy-button" content="Comprar" />
            </form>
          </section>
        </section>
  
  
      </main>
        // <main className="buy-page">
        //     <header>
        //         <h2>Compra tus pasajes aquí <strong> sin tener que salir de casa</strong></h2>
        //         <section className="buy-row">
        //             <img src="/Images/ticket.jpg" alt="" className="ticket" />
        //             <form className="buy-form">
        //                 <label className="input-wrapper">
        //                     Empresa
        //                     <select name="" id="" className="company">
        //                         <option value="" disabled>Selecionar empresa</option>
        //                         {empresas && empresas.map(empresa => <option key={empresa.iD_Empresa} value={empresa.iD_Empresa}>{empresa.nombre}</option>)}
        //                     </select>
        //                 </label>
        //                 <Input type="date" label="Fecha de salida" />
        //                 <Button submit className="buy-button" content="Comprar" />
        //             </form>
        //         </section>
        //     </header>
        //     <section className="pay-methods">
        //         <h4>
        //             Todas las formas de pago <br /> <strong>Compras 100% seguras</strong>
        //         </h4>
        //         <section className="pay-methods-icons">
        //             <img src="https://i.pinimg.com/originals/cb/0a/41/cb0a415465fcee4abb64ec1e0403a377.png" alt="" />
        //             <img src="https://pngimg.com/uploads/mastercard/mastercard_PNG16.png" alt="" />
        //             <img src="https://th.bing.com/th/id/R.ec4bee918a997aa7b86de0c38da66deb?rik=lc0DmGNippGWmA&riu=http%3a%2f%2fwww.timon.com.co%2fwp-content%2fuploads%2fEfecty.png&ehk=sH%2bBzR6ihiCBc0HQ50t5G9XWvSHFpu3RjfNeCFGwqzg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
        //         </section>
        //     </section>
        //     <section className="payment-text">
        //         <h3>Tu viaje comienza en {PROJECT_NAME}</h3>
        //         <p>
        //             Encuentra cual es el pasaje en bus más barato, cuáles son las mejores promociones y/o descuentos para comprar tus pasajes de bus con MyBuss. Ahora puedes comparar todas las diferentes ofertas que ofrecen todas las empresas de transporte para viajar a tu destino favorito, de una forma muy fácil en MyBuss. Vas a poder encontrar la información que necesitas para viajar de forma segura. Qué esperas para comprar tus tiquetes con MyBuss.
        //         </p>
        //     </section>
        // </main>
    )
}