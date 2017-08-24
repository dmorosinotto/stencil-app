import { Component, Prop, State, Method, Listen } from '@stencil/core';


interface InputEvent extends UIEvent {
  target: EventTarget & { value: string }
}

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {



  @Prop() first: string;

  @Prop() last: string;

  @State() i: string;

  @State() b: boolean = false;
  
  inputChanged(e: InputEvent) {
    console.log("EV",e,"target",e.target);
    this.i = e.target.value;
    this.i = (e.target as any).value; 
  }

  @Method()
  showPrompt(x?: string) {
    // show a prompt
    if (x) {
      this.i = x;
    } else {
      //TOOGLE STATE -> show/hide todo-list --> life-cycle
      this.b = !this.b; 
    }
    alert(this.i);
  }

  @Listen('todoCompleted')
  todoCompletedHandler(event: CustomEvent) {
    console.log("EVENT=",event);
    console.log("DATA=", (event as any).data);
    console.log('Received the custom todoCompleted event: ', event.detail);
    alert(JSON.stringify(event.detail))
  }

  @Listen('body:keyup.escape')
  escapeKeyUp() {
    console.log('the escape key was clicked');
    this.b = !this.b; //TOGGLE <todo-list>
  }

  render() {
    return (
    <p>
      Hello, my name is {this.first} {this.last}
          
    <hr/>
    <input onChange={ (event: InputEvent) => this.inputChanged(event)}/>
    <toggle-it full-name={this.i} b={this.b}></toggle-it> 

    <hr/>
      { this.b ? (<todo-list></todo-list>) : '' }  
    </p>
  );
  }
}