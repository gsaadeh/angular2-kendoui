import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2KendouiAppComponent } from '../app/ng2-kendoui.component';

beforeEachProviders(() => [Ng2KendouiAppComponent]);

describe('App: Ng2Kendoui', () => {
  it('should create the app',
      inject([Ng2KendouiAppComponent], (app: Ng2KendouiAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-kendoui works!\'',
      inject([Ng2KendouiAppComponent], (app: Ng2KendouiAppComponent) => {
    expect(app.title).toEqual('ng2-kendoui works!');
  }));
});
