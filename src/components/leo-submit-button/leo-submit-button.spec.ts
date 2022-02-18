import { newSpecPage } from '@stencil/core/testing';
import { LeoSubmitButton } from './leo-submit-button';

describe('leo-submit-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LeoSubmitButton],
      html: '<leo-submit-button></leo-submit-button>',
    });
    expect(root).toEqualHtml(`
      <leo-submit-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </leo-submit-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [LeoSubmitButton],
      html: `<leo-submit-button first="Stencil" last="'Don't call me a framework' JS"></leo-submit-button>`,
    });
    expect(root).toEqualHtml(`
      <leo-submit-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </leo-submit-button>
    `);
  });
});
