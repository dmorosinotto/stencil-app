import { Component, State, Event, EventEmitter } from '@stencil/core';

export interface Todo {
  taskName: string;
  isCompleted: boolean;
}

@Component({
  tag: 'todo-list'
  //,styleUrl: 'my-todos.scss'
})
export class TodoList {

  @State() todos: Todo[];

  @Event() todoCompleted: EventEmitter;
  
  componentWillLoad() {
    console.log('@componentWillLoad -> The view is about to be rendered');
  }

  componentDidLoad() {
    console.log('@componentDidLoad -> The view has been rendered');
  }

  componentDidUnload() {
    console.log('@componentDidUnload -> The view has been removed from the DOM');
  }

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }

  constructor() {
    this.todos = [
      { taskName: "Install stencil", isCompleted: true },
      { taskName: "read docs", isCompleted: true },
      { taskName: "try it", isCompleted: false },
    ]
  }

  handleClick(e: UIEvent) {
    alert("You clicked!")
    console.log(e);
  }

  render() {
    const todosHtml = this.todos.map((todo) => {
      return (
        <ul>
          <li onClick={ () => this.todoCompletedHandler(todo)  }>
            {todo.taskName}
            <b>{todo.isCompleted.toString()}</b>
          </li>
        </ul>
      );
    });
    todosHtml.push(
      <button onClick={ (event: UIEvent) => this.handleClick(event)}>Click Me!</button>
    )
    return todosHtml;
  }
}