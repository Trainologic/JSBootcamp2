import { OutletsPage } from './app.po';

describe('outlets App', () => {
  let page: OutletsPage;

  beforeEach(() => {
    page = new OutletsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
