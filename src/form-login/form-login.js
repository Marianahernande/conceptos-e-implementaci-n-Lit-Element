import { LitElement, html } from 'lit-element';
import stylesCss from './form-loginStyle';

export class FormLogin extends LitElement {

  constructor(){
    super()
    this.mensaje = "";
    this.idNombre = "nombre";
  }

  static get properties(){
    return {
      mensaje: { type: String },
    };
  }

  static get styles(){
    return [stylesCss]
  }

  enviar(tipo) {        
    if (tipo=="exito") {
      this.mensaje = "Se ha logeado correctamente" 
    } else {
      this.mensaje = "Yate"
    }
  }

  render() {
    return html`
    <div class="contenedor">      
      <div class="contenedorForm">
        <h5 class="tituloForm">Formulario de ingreso</h5>
        <form class="form">
          <div class="form-group">
            <label for="nombre" class="form-label">Nombre de usuario:</label>
            <input type="text" id="${this.idNombre}" placeholder="Digite su nombre de usuario" class="form-input"/>
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Contraseña:</label>
            <input type="text" id="password" placeholder="Digite su contraseña" class="form-input"/>                      
          </div>
        </form>        
        <div class="form-cont-button">
            <button @click=${(e)=>this.enviar("exito")}>Enviar</button>            
        </div>
        <button class="form-href">No tengo una cuenta</button>
        <div class="mensajeResultado">
          <p>${this.mensaje}</p>
        </div>        
      </div>
    </div>
    `;
  }
}

customElements.define('form-login', FormLogin);