import { BandpagePage } from './app.po';

describe('bandpage App', function() {
  let page: BandpagePage;

  beforeEach(() => {
    page = new BandpagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
