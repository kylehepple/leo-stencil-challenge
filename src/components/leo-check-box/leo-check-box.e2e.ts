import { newE2EPage } from '@stencil/core/testing';

describe('leo-check-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<leo-check-box></leo-check-box>');
    const element = await page.find('leo-check-box');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name', async () => {
    const page = await newE2EPage();

    await page.setContent('<leo-check-box name="testing-name"></leo-check-box>');
    const input = await page.find('leo-check-box >>> input');
    const label = await page.find('leo-check-box >>> label');

    expect(input.getAttribute('name')).toEqual('testing-name');
    expect(label.getAttribute('for')).toEqual('testing-name');
  });

  it('renders and sets the label to uppercase', async () => {
    const page = await newE2EPage();

    await page.setContent('<leo-check-box label="testing-label"></leo-check-box>');
    const label = await page.find('leo-check-box >>> label');

    expect(label.innerHTML).toEqual('TESTING-LABEL');
  });

});
