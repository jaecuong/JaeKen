import { JaeKenPage } from './app.po';

describe('jae-ken App', () => {
  let page: JaeKenPage;

  beforeEach(() => {
    page = new JaeKenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
