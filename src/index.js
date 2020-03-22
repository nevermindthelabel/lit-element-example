import { LitElement, html } from '../web_modules/lit-element.js';

class ListItem extends LitElement {

  constructor() {
    super();
    this.name = 'Hipsum';
    this.description = 'Dummy text';
  }

  static get properties() {
    return {
      name: { type: String },
      description: { type: String }
    }
  }

  render() {
    return html`
     <style>
      .list {
        margin: 10px;
        padding: 10px;
        border: solid 1px black;
        border-radius: 10px;
        min-height: 50px;
      }
    </style>
    <div className="list">
      <h2>${this.name}</h2>
      <p>${this.description}</p>
    </div>
    `;
  }
}

customElements.define('list-item', ListItem);
