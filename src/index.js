import { LitElement, html } from 'lit-element';

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
      <h2>${this.name}</h2>
      <p>${this.description}</p>
    `;
  }
}

customElements.define('list-item', ListItem);
