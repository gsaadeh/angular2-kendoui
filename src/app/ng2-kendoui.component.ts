import { Component } from '@angular/core';
import { FORM_DIRECTIVES, ControlGroup, Control  } from '@angular/common';
import { KendoValueAccessor } from './shared/kendo.angular2';

import 'kendo-ui-core/numerictextbox';
import 'kendo-ui-core/slider';

@Component({
  moduleId: module.id,
  selector: 'ng2-kendoui-app',
  templateUrl: 'ng2-kendoui.component.html',
  styleUrls: ['ng2-kendoui.component.css'],
  directives: [FORM_DIRECTIVES, KendoValueAccessor]
})
export class Ng2KendouiAppComponent {
  title = 'ng2-kendoui works!';
    data: { amount: Number } = { amount: 10 };
    numericOptions: { format: String } = { format: "c0" };

    theFormat: String;

    testForm: ControlGroup;

    constructor() {
        this.data.amount = 10;

        this.testForm = new ControlGroup({
            amount: new Control("")
        });

    }

    setFormat() {
        this.numericOptions = { format: "n0" };
    }

    onSubmit() {
    }
}
