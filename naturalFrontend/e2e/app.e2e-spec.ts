import { NaturalFrontendPage } from './app.po';

describe('natural-frontend App', () => {
  let page: NaturalFrontendPage;

  beforeEach(() => {
    page = new NaturalFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
