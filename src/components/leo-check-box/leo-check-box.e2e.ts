import { newE2EPage } from '@stencil/core/testing';

describe('leo-check-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<leo-check-box></leo-check-box>');
    const element = await page.find('leo-check-box');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<leo-check-box></leo-check-box>');
    const component = await page.find('leo-check-box');
    const element = await page.find('leo-check-box >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
