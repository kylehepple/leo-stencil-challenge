import { newE2EPage } from '@stencil/core/testing';

describe('leo-loading-indicator', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<leo-loading-indicator></leo-loading-indicator>');
    const component = await page.find('leo-loading-indicator');
    const element = await page.find('leo-loading-indicator >>> div');
    expect(component).toHaveClass('hydrated');
    expect(element).toHaveClass('loader-white');
  });

  it('renders with the correct color class', async () => {
    const page = await newE2EPage();

    await page.setContent('<leo-loading-indicator color="primary"></leo-loading-indicator>');
    const element = await page.find('leo-loading-indicator >>> div');
    expect(element).toHaveClass('loader-primary');
  });
});
