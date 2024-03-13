
import "./Footer.scss";

export default function Footer() {
  return (
    <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>Enlaces rápidos</h3>
        <a href="#home">
          <i className="fas fa-arrow-right"></i> Inicio
        </a>
       
        <a href="#menu">
          <i className="fas fa-arrow-right"></i> Nosotros
        </a>
      
  
      </div>

      <div className="box">
        <h3>Contactenos</h3>
        <a href="#">
          <i className="fas fa-phone"></i> +123-456-7890
        </a>
       
        <a href="#">
          <i className="fas fa-envelope"></i> MyBuss@gmail.com
        </a>
        <a href="#">
          <i className="fas fa-envelope"></i> Colombia-Quindio
        </a>
      </div>

      <div className="box">
        <h3>Redes Sociales</h3>
        <a href="#">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        
      </div>
    </div>

    <div className="credit">
      Created by <span> Montes & Maicol</span>
    </div>
  </section>
  );
}
