import { Component, Prop, PropDidChange, PropWillChange, Element } from '@stencil/core';

@Component({
  tag: 'toggle-it',
  styleUrl: 'my-style.scss'
})
export class ToggleIt {

  @Prop() b: boolean;
  @Prop() fullName: string;
  @Element() element: HTMLElement;

  private _trickIsFirst: boolean = false;

  @PropWillChange('fullName')
  willChangeHandler(newValue: string) {
    console.log('Will change: ', newValue);
    //this.fullName = "YYY" + newValue; //NOT VALID! IT'S READONLY
    //newValue = "XXX " + newValue;     //IGNORED - CAN'T CHANGE VALUE
    //return "ZZZ" + newValue;          //IGNORED - CAN'T MODIFY VALUE
    console.log("HTML EL", this.element );
    
    //SUPER TRICK TO INSERT LOGIC TO SET/CHANGE VALUE, DON'T USE IT!!!
    if (!this._trickIsFirst) {
      this._trickIsFirst = true;
      setTimeout(()=>this.element["fullName"] = "MR." + newValue + " ;-)", 0 );
    } else {
      this._trickIsFirst = false;
    }
  }

  @PropDidChange('fullName')
  didChangeHandler(newValue: string) {
    // do something now that `fullName` has changed
    console.log("DidChange -> fullName CHANGED", newValue);
  }

  renderB() {
    return (
      <div>
        <b>{this.b /*NOTHING RENDER*/}</b>
        =<i>{this.b?'TRUTY':'FALSY'}</i>
        =<pre>{JSON.stringify(this.b)}</pre>
      </div>
    );
  }

  render() {
    if (this.fullName) {
      return (<p>
        HI {this.fullName}
        { this.renderB() }
      </p>);
    } else {
      return (<p>
        <span style={{color:'red'}}>NO FULL NAME!</span>
        { this.renderB() }
      </p>);
    }
  }
}