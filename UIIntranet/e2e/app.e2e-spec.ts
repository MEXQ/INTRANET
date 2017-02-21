import { UIIntranetPage } from './app.po';

describe('uiintranet App', function() {
  let page: UIIntranetPage;

  beforeEach(() => {
    page = new UIIntranetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
