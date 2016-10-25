import { ArigPage } from './app.po';

describe('arig App', function() {
  let page: ArigPage;

  beforeEach(() => {
    page = new ArigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
