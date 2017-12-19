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

renderBroken(); // Comment out this line to see the componentDidMount working in the Good Component

renderGood(); // This renders but componentDidMount is not called when there is an error in the previous component


