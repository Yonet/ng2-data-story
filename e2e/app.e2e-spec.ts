import { Ng2DataStoriesPage } from './app.po';

describe('ng2-data-stories App', function() {
  let page: Ng2DataStoriesPage;

  beforeEach(() => {
    page = new Ng2DataStoriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
