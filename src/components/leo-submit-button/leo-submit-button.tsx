import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop } from '@stencil/core';

@Component({
  tag: 'leo-submit-button',
  styleUrl: 'leo-submit-button.css',
  shadow: true,
})
export class LeoSubmitButton {

  private loading: boolean = false;

  /**
   * Access to the element & shadowRoot
   */
  @Element() el: HTMLLeoSubmitButtonElement;

  /**
   * The button color
   */
  @Prop() color: 'primary' | 'secondary' = 'primary';

  /**
   * The button text
   */
  @Prop() text: string = '';

  /**
   *  Emitted when the button goes into loading mode
   */
  @Event() leoClick: EventEmitter<void>;

  @Listen('click')
  onClick() {
    this.leoClick.emit();
  }

  /**
   * Show or hide the loader based on the parameter passed
   *
   * @param {boolean} [show=true]
   */
  @Method()
  @Listen('click')
  async showLoader(show: boolean = true) {

    if (show && this.loading) {
      return;
    }

    const button = this.el.shadowRoot.querySelector('button');

    button.innerHTML = (show) ? '' : this.text.toUpperCase();
    button.style.pointerEvents = (show) ? 'none' : 'all';

    if (show) {
      button.appendChild(document.createElement('leo-loading-indicator'));
    }

    this.loading = show;

  }

  render() {
    return (
      <Host>
        <button class={`btn-${this.color}`} type="button">
          { this.text.toUpperCase() }
        </button>
      </Host>
    );
  }

}
