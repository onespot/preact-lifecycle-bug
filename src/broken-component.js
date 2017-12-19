import {h, Component} from 'preact';


export class BrokenComponent extends Component {

  componentDidMount() {
    console.log('CDM - Broken Component');
  }

  render() {
    const x = a.b;
    return <div>Bad Component</div>
  }

}