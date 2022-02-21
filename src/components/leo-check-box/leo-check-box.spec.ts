import { newSpecPage } from '@stencil/core/testing';
import { LeoCheckBox } from './leo-check-box';

describe('leo-check-box', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LeoCheckBox],
      html: '<leo-check-box></leo-check-box>',
    });
    expect(root).toEqualHtml(`
      <leo-check-box>
        <mock:shadow-root>
          <input type="checkbox">
          <label></label>
        </mock:shadow-root>
      </leo-check-box>
    `);
  });

  it('fires the leoChange event when the input is clicked', async () => {
    const page = await newSpecPage({
      components: [LeoCheckBox],
      html: '<leo-check-box></leo-check-box>',
    });
    const mockFn = jest.fn();
    page.win.addEventListener('leoChange', mockFn);
    page.root.shadowRoot.querySelector('input').click();
    await page.waitForChanges();
    expect(mockFn).toHaveBeenCalled();
  });

  it('sets the "checked" value of the input', async () => {
    const page = await newSpecPage({
      components: [LeoCheckBox],
      html: '<leo-check-box></leo-check-box>',
    });
    expect(page.root.shadowRoot.querySelector('input').checked).toBeFalsy();
    page.root.setChecked(true);
    await page.waitForChanges();
    expect(page.root.shadowRoot.querySelector('input').checked).toBeTruthy();
  });

});
