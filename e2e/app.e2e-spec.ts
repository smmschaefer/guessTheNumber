import { GuessthenumberPage } from './app.po';

describe('guessthenumber App', function() {
  let page: GuessthenumberPage;

  beforeEach(() => {
    page = new GuessthenumberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
