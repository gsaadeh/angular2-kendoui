///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="../typings/kendo-ui/kendo-ui.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import 'jquery';

import { Ng2KendouiAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2KendouiAppComponent);

