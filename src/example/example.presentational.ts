import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './example.styles';
import type { Color } from './example.types';

@customElement('prefix-example')
class Example extends LitElement {
  public static override styles = styles;

  @property({ reflect: true, attribute: true })
  public color?: Color = 'dark';

  public override render() {
    return html`<slot></slot>`
  }
}

export default Example;
