import { Component } from '@stencil/core';

@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {
  render() {return([
      <h1>Welcome to MAIN PAGE</h1>,
      <hr/>,
      <h2>is this blue?!</h2>
  ])}
}