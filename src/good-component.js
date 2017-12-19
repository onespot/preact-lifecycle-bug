import { h, Component } from 'preact';

export class GoodComponent extends Component {

  componentDidMount() {
    console.log('CDM - Good Component');
  }

  render() {
    return <div>Good Component</div>;
  }
}
