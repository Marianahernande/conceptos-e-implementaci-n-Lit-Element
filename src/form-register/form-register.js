import { LitElement, html } from 'lit-element';
import stylesCss from './form-registerStyle';
import { FormLogin as login} from "../form-login/form-login";

export class FormRegister extends LitElement {

  constructor(){
    super()
    this.contentEnable = true;
  }

  static get properties(){
    return {
      contentEnable: { type: Boolean },
    };
  }

  static get styles(){
    return [stylesCss]
  }

  mostrarLogin(){
    this.contentEnable = false;
    login.contentEnable = true;
  }
  
  render() {
    return html`
      <div class="contenedor">      
      <div class="contenedorForm">
        <h5 class="tituloForm">Formulario de registro</h5>
        <form class="form">
          <div class="form-group">
            <label for="nombre" class="form-label">Nombre de usuario:</label>
            <input type="text" id="nombre" placeholder="Digite su nombre" class="form-input" />
          </div>
          <div class="form-group">
            <label for="correo" class="form-label">Correo electronico:</label>
            <input type="email" id="correo" placeholder="Digite su correo" class="form-input" />
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Contraseña:</label>
            <input type="text" id="password" placeholder="Digite su contraseña" class="form-input" />
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Confirme su contraseña:</label>
            <input type="text" id="password" placeholder="Digite su contraseña" class="form-input" />  
          </div>                                      
        </form>
        <div class="form-cont-button">
            <button @click=${(e)=>this.enviar("exito")}>Registrarme</button>            
        </div>
        <button class="form-href" @click=${(e)=>this.mostrarLogin()}>Ya tengo una cuenta</button>
        <div class="mensajeResultado">
          <p>${this.mensaje}</p>
        </div>         
      </div>
    </div>
    `;
  }
}

customElements.define('form-register', FormRegister);