import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './example.styles';
import type { Color } from './example.types';

@customElement('prefix-example')
class Example extends LitElement {
  public static override styles = styles;

  @property({ reflect: true, attribute: true })
  public color?: Color = 'dark';

  @property({ reflect: true, attribute: true })
  public 'icon-placement': string = 'left';

  @property({ reflect: true, attribute: true })
  public 'checked': boolean = false;

  public doSomething() {
    this.checked = !this.checked;
  }

  public override render() {
    return html`
      <slot name="first" @click="${this.doSomething}"></slot>
      <slot name="second"></slot>
      <box @click="${this.doSomething}">box</box>
      <text>text</text>
    `;
  }
}

export default Example;
