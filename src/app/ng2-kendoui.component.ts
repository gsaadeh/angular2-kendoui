import { Component, AfterViewInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { FORM_DIRECTIVES, ControlGroup, Control  } from '@angular/common';

import 'kendo-ui-core/numerictextbox';
import 'kendo-ui-core/slider';

@Component({
  moduleId: module.id,
  selector: 'ng2-kendoui-app',
  templateUrl: 'ng2-kendoui.component.html',
  styleUrls: ['ng2-kendoui.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class Ng2KendouiAppComponent implements AfterViewInit {
    title = 'ng2-kendoui works!';
    data: { amount: Number } = { amount: 3 };
    numericOptions:kendo.ui.NumericTextBoxOptions = { format: 'c0', min: 10, max: 20 };
    @ViewChild("amount") private amountElement: ElementRef;

    theFormat: String;

    testForm: ControlGroup;

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {
        
        this.testForm = new ControlGroup({
            amount: new Control("")
        });

    }

    public ngAfterViewInit() {
        jQuery(this.amountElement.nativeElement).kendoNumericTextBox(this.numericOptions);
    }

    setFormat() {
        this.numericOptions = { format: "n0" };
    }

    onSubmit() {
    }
}
