
import "./Footer.scss";

export default function Footer() {
  return (

    <section className="footer">
    <div className="box-container">
        <div className="box">
            <h3>Enlaces rápidos</h3>
            <a href="/home">
            <i className="fas fa-arrow-right"></i> Inicio

            </a>
            <a href="/buy">
                <i className="fas fa-arrow-right"></i> Compra tus Tickets
            </a>
            <a href="/about">
                <i className="fas fa-arrow-right"></i> Nosotros
            </a>
            <a href="/">
                <i className="fas fa-arrow-right"></i> Paraderos
            </a>
         
        </div>

        <div className="box">
            <h3>Contactenos</h3>
            <a href="tel:+1234567890">
                <i className="fas fa-phone"></i> +123-456-7890
            </a>
            <a href="mailto:info@mybuss.com">
                <i className="fas fa-envelope"></i> info@mybuss.com
            </a>
            <p>
                <i className="fas fa-map-marker-alt"></i> Colombia, Quindio
            </p>
        </div>

        <div className="box">
            <h3>Redes Sociales</h3>
            <a href="https://www.facebook.com/mybuss" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com/mybuss" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com/mybuss/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
            </a>
        </div>
    </div>

    <div className="credit">
        <p>© {new Date().getFullYear()} MyBuss. Todos los derechos reservados.</p>
        <p>Creado por <span>Montes & Maicol</span></p>
    </div>
</section>



  );
}
