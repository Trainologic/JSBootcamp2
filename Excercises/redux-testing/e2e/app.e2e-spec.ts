import { ReduxTestingPage } from './app.po';

describe('redux-testing App', () => {
  let page: ReduxTestingPage;

  beforeEach(() => {
    page = new ReduxTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
