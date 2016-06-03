import { Ng2KendouiPage } from './app.po';

describe('ng2-kendoui App', function() {
  let page: Ng2KendouiPage;

  beforeEach(() => {
    page = new Ng2KendouiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-kendoui works!');
  });
});
