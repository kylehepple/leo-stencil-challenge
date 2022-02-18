import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'leo-loading-indicator',
  styleUrl: 'leo-loading-indicator.css',
  shadow: true,
})
export class LeoLoadingIndicator {

  /**
   * The color of the spinner.
   * @type {('white' | 'primary' | 'secondary')}
   */
  @Prop() color: 'white' | 'primary' | 'secondary' = 'white';

  render() {
    return (
      <div class={`ring-loader loader-${this.color}`}></div>
    );
  }
}
