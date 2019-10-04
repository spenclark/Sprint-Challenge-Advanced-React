import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import Players from './components/player'
import Singup from './components/addForm'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// makes sure Players renders without crashing
test('renders without crashing', () => {
  render(<Players />);
});

// make sure country is a field on the chart

