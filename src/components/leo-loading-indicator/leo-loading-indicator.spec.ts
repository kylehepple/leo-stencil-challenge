import { newSpecPage } from '@stencil/core/testing';
import { LeoLoader } from './leo-loading-indicatore';

describe('leo-loading-indicator', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LeoLoader],
      html: '<leo-loading-indicator></leo-loading-indicator>',
    });
    expect(root).toEqualHtml(`
      <leo-loading-indicator>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </leo-loading-indicator>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [LeoLoader],
      html: `<leo-loading-indicator first="Stencil" last="'Don't call me a framework' JS"></leo-loading-indicator>`,
    });
    expect(root).toEqualHtml(`
      <leo-loading-indicator first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </leo-loading-indicator>
    `);
  });
});
