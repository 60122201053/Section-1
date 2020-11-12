import { SectionFirstPage } from './app.po';

describe('section-first App', function() {
  let page: SectionFirstPage;

  beforeEach(() => {
    page = new SectionFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
