import { Directive, ElementRef, Renderer, Self, forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/common';
import { isBlank } from '@angular/common/src/facade/lang';

function CONST_EXPR(expr) : void {
  return expr;
}

const DEFAULT_VALUE_ACCESSOR = CONST_EXPR(
    new Provider(
        NG_VALUE_ACCESSOR, 
        {
            useExisting: forwardRef(() => KendoValueAccessor), 
            multi: true
        }
    )
);

@Directive({
    selector: '[ngControl], [ngModel], [ngFormControl]',
    host: {
        '(change)': 'internalOnChange()',
        '(spin)': 'internalOnChange()',
        '(blur)': 'onTouched()'     
    },       
    bindings: [DEFAULT_VALUE_ACCESSOR]
})

// ControlValueAccessor is a bridge between a control and a native element
// A ControlValueAccessor abstracts the operations of writing a new vlaue to a DOM element reprsenting an input control
export class KendoValueAccessor implements ControlValueAccessor {

    // default handler.
    onChange = (_) => {};
    onTouched = () => {};
  
    element: any;

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {
        console.log(_elementRef);
        this.element = _elementRef.nativeElement;
        console.info( this.element);
    }
  
    internalOnChange = () => {
        this.onChange(this.element.value());
    };

    // write a new value to the element.
    writeValue(value: any): void {
        var normalizedValue = isBlank(value) ? '' : value;
        this.element.value(normalizedValue);
    }

    // set the function to be called when the control receives a change event.
    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn; 
    }
    
    // set the function to be called when the control receives a touch event. 
    registerOnTouched(fn: () => void): void { 
        this.onTouched = fn; 
    }
}