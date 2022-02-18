import { newSpecPage } from '@stencil/core/testing';
import { LeoLoader } from './leo-check-boxe';

describe('leo-check-box', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LeoLoader],
      html: '<leo-check-box></leo-check-box>',
    });
    expect(root).toEqualHtml(`
      <leo-check-box>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </leo-check-box>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [LeoLoader],
      html: `<leo-check-box first="Stencil" last="'Don't call me a framework' JS"></leo-check-box>`,
    });
    expect(root).toEqualHtml(`
      <leo-check-box first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </leo-check-box>
    `);
  });
});
