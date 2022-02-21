import { newSpecPage } from '@stencil/core/testing';
import { LeoLoadingIndicator } from './leo-loading-indicator';

describe('leo-loading-indicator', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LeoLoadingIndicator],
      html: '<leo-loading-indicator></leo-loading-indicator>',
    });
    expect(root).toEqualHtml(`
      <leo-loading-indicator>
        <mock:shadow-root>
          <div class="loader-white ring-loader"></div>
        </mock:shadow-root>
      </leo-loading-indicator>
    `);
  });

});
