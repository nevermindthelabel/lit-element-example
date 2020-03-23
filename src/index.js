import { LitElement, html } from '../web_modules/lit-element.js';

class ListItem extends LitElement {

  constructor() {
    super();
    this.name = 'Hipsum';
  }

  static get properties() {
    return {
      name: { type: String },
    }
  }

  render() {
    return html`
    <div className="list" @click="${this.clickEvent}">
      <h2>${this.name}</h2>
      <!-- <p>${this.description}</p> -->
      <p><list-item-description></list-item-description></p>
    </div>
    `;
  }
}


customElements.define('list-item', ListItem);

class ListItemDescription extends LitElement {
  constructor() {
    super();
    // this.description = this.description;
  }

  static get properties() {
    return {
      description: { type: String }
    }
  }

  render() {
    return html`
    <p>Test</p>
  `;
  };
};

customElements.define('list-item-description', ListItemDescription);
