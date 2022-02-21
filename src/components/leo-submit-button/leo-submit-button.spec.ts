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
          <button class="btn-primary" type="button"></button>
        </mock:shadow-root>
      </leo-submit-button>
    `);
  });

  it('fires the "leoClick" event when the button is clicked', async () => {
    const page = await newSpecPage({
      components: [LeoSubmitButton],
      html: '<leo-submit-button></leo-submit-button>',
    });
    const mockFn = jest.fn();
    page.win.addEventListener('leoClick', mockFn);
    page.root.click();
    await page.waitForChanges();
    expect(mockFn).toHaveBeenCalled();
  });

  it('renders a "leo-loading-indicator" in the button when clicked', async () => {
    const page = await newSpecPage({
      components: [LeoSubmitButton],
      html: '<leo-submit-button></leo-submit-button>',
    });
    page.root.click();
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('leo-loading-indicator')).not.toBeNull();
  });

  it('renders a "leo-loading-indicator" in the button when "showLoader" called', async () => {
    const page = await newSpecPage({
      components: [LeoSubmitButton],
      html: '<leo-submit-button></leo-submit-button>',
    });
    page.root.showLoader(true);
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('leo-loading-indicator')).not.toBeNull();
  });
});
