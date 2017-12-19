// @jsx h
import { h, render} from 'preact';
import {BrokenComponent} from './broken-component';
import {GoodComponent} from './good-component';

function renderBroken() {
  try {
    render(<BrokenComponent/>, document.getElementById('component-1'));
  } catch (e) {
    console.log('Error rendering');
  }
}

function renderGood() {
  render(<GoodComponent/>, document.getElementById('component-2'));
}

// If renderBroken is called before the good component is rendered, ComponentDidMount is
// never called on the good component.
// Should they not be totally separate?

renderBroken();

renderGood();


