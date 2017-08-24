import { Component } from '@stencil/core';

@Component({
  tag: 'home-page'
})
export class HomePage {
  render() {return(
    <my-name first="Stencil" last="JS"></my-name>
  )}
}