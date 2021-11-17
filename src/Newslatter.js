import './App.css';

function Newslatter() {
    return (
        <div>
        <section className="newslatter">
            <h2> INSCRIBITE A NUESTRO NEWSLATTER </h2>
            <p>¡Recibi beneficios y enterate de todas nuestras novedades!</p>
            <form>
                <input type="email" required="email" placeholder="Ingresa tu email"
                    style={{"height": "30px", "width": "250px", "display": "block", "margin": "auto", "font-family": "Montserrat"}} />
                <input type="submit" value="Inscribirme"
                    style={{"width": "100px", "height": "50px", "margin-top": "10px", "font-family": "Montserrat"}} />
            </form>
        </section>
      </div>
    );
  }

  export default Newslatter;
