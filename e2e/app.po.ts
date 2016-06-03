export class Ng2KendouiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-kendoui-app h1')).getText();
  }
}
