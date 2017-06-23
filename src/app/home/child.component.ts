import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home-child',
  encapsulation: ViewEncapsulation.Native,
  template: `
    <p>From child</p>
    <p>passed from parent {{ childParam }}</p>
  `,
  styles: [`
    :host {
      display: flex;
      border: 1px solid red;
    }
    /deep/ p {
      color: green;
    }
    p {
      font-size: 30px;
    }
    p {
      color: red;
    }
  `]
})
export class ChildComponent {
  private _childParam;
  get childParam(): any {
    return this._childParam;
  }

  @Input()
  set childParam(value: any) {
    this._childParam = value;
    console.log('param updated');
  }
}
