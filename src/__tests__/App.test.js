import React from 'react';
import ReactDOM from 'react-dom';
// jest.mock('../App');
import App from '../App';
import { shallow } from 'enzyme';

// App.mockImplementation(() => ({
//   render() {
//     return (<p></p>);
//   }
// }));

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should show SVG spinner logo', () => {
    const rendered = shallow(<App />);
    expect(rendered.find('img').props()).toHaveProperty('className', 'App-logo');
  });
  it('should have p element', () => {
    const rendered = shallow(<App />);
    expect(rendered.find('p').length).toBe(1);
  });
})
