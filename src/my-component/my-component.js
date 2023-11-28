import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle';
import { FormLogin } from '../form-login/form-login';
import { FormRegister } from '../form-register/form-register';

export class MyComponent extends LitElement {

  constructor(){
    super()
    this.saludo = "Andres";
    this.componentesHtml = html`<form-login></form-login>`;
    this.botonCambiar = html`<button @click="${(e) => this.mostrarComponente(2)}">Registrarme</button>`
    this.paramComponent = 0;
  }

  static get properties(){
    return {
      saludo: { type: String },
      componentesHtml: { type: String },
      botonCambiar: { type: String },
      paramComponent: { type: Number }
    };
  }

  //hoy
  static get scopedElements(){
    return {
      "form-login": FormLogin,
      "form-register": FormRegister
    }
  }

  static get styles(){
    return [stylesCss]
  }

  cambio() {
   this.saludo = "Yate" 
  }

  renderAll(){
    if (this.paramComponent == 1) {
      this.componentesHtml = html`<form-login></form-login>`;
    } else {
      this.componentesHtml = html`<form-register></form-register>`;
    }
  }

  mostrarComponente(valor){    
    this.paramComponent = valor;
    if (valor == 2) {
      this.botonCambiar = html`<button @click="${(e) => this.mostrarComponente(1)}">Cambiar</button>`          
    } else {
      this.botonCambiar = html`<button @click="${(e) => this.mostrarComponente(2)}">Cambiar</button>`          
    }    
    this.renderAll()
  }

  mostrarLogin(){
    return html`<form-login></form-login>`
  }

  render() {
    this.paramComponent = 1;

    return html`
      ${this.componentesHtml}   
      ${this.botonCambiar}         
    `;
  }
}

customElements.define('my-component', MyComponent);