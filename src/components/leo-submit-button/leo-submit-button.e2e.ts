import { newE2EPage } from '@stencil/core/testing';

describe('leo-submit-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<leo-submit-button></leo-submit-button>');
    const component = await page.find('leo-submit-button');
    const button = await page.find('leo-submit-button >>> button');
    expect(component).toHaveClass('hydrated');
    expect(button).toHaveClass('btn-primary');
  });

  it('renders with the relevant color class', async () => {
    const page = await newE2EPage();
    await page.setContent('<leo-submit-button color="secondary"></leo-submit-button>');
    const element = await page.find('leo-submit-button >>> button');
    expect(element).toHaveClass(`btn-secondary`);
  });

  it('renders with the button text', async () => {
    const page = await newE2EPage();
    await page.setContent('<leo-submit-button text="testing-text"></leo-submit-button>');
    const element = await page.find('leo-submit-button >>> button');
    expect(element.innerHTML).toEqual(`TESTING-TEXT`);
  });
});
