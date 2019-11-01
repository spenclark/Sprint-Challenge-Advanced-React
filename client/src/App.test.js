import React from 'react';

import {render, getByText} from '@testing-library/react';
import App from './App';
import Form from './components/form'
import Player from './components/player';


// #1 App renders without Crashing 
test("app renders without crashing", () => {
  render(<App />)
})

// #2 Form renders without crashing
test("form renders", () => {
  render(<Form />)
})


// #3 clear button on form sets state to empty string

// #4 find text "united states"
// test("United states : exists", () => {
//   const country = render(<Player player={player} />)

//   country.getByText(/United States/i)

// })
// #5 app header contains 
test(' App header contains text', () => {
  const navbar = render(<App />)

  navbar.getByText(/World Cup/i);
}); 

// #6 Player renders without crashing

test("Players is attempting ot be rendered on app", () => {
  const page = render(<App />)
  page.getByText(/Player/i)
})

// #7 finds starter cell

test(' App header contains text', () => {
  const cell = render(<App />)

  cell.getByText(/Search Rank/i);
}); 
