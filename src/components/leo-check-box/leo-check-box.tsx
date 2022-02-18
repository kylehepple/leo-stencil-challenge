import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';

@Component({
  tag: 'leo-check-box',
  styleUrl: 'leo-check-box.css',
  shadow: true,
})
export class LeoCheckBox {

  /**
   * Access to the element & shadowRoot
   */
  @Element() el!: HTMLLeoCheckBoxElement;

  /**
   * The label for the LeoCheckBox
   */
  @Prop() label!: string;

  /**
   * The name for the LeoCheckBox
   */
  @Prop() name!: string;

  /**
   * Emitted when the check changes
   */
  @Event() leoChange: EventEmitter<boolean>;

  /**
   * Checks or unchecks the check input based on the parameter passed
   *
   * @param {boolean}
   */
  @Method()
  async setChecked(checked: boolean) {
    this.el.shadowRoot.querySelector('input').checked = checked;
  }

  onClick() {

    this.leoChange.emit(this.el.shadowRoot.querySelector('input').checked);

  }

  render() {
    return (
      <Host>
        <input type="checkbox" name={this.name} onClick={this.onClick.bind(this)} />
        <label htmlFor={this.name}>
          {this.label}
        </label>
      </Host>
    );
  }
}
