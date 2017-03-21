import { ContextMenuPage } from './app.po';

describe('context-menu App', () => {
  let page: ContextMenuPage;

  beforeEach(() => {
    page = new ContextMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
