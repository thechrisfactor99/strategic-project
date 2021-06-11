import React from 'react'; // so that we can use JSX syntax
import {
 render,
 cleanup,
 waitForElement
} from '@testing-library/react'; // testing helpers
import userEvent from '@testing-library/user-event' // testing helpers for imitating user events
import '@testing-library/jest-dom'; // to extend Jest's expect with DOM assertions
import { screen } from '@testing-library/dom'

import TablePage from '../../pages/table'


const result = render(<TablePage/>)


it('changes display of table as checkboxes are checked/unchecked', () => {
  const checkbox1 = result.container.querySelector('input');
  //const div = getByTestId(DIV_ID)
  expect(checkbox1.checked).toEqual(false)
  //userEvent.click(checkbox1)
  //expect(checkbox1.checked).toEqual(true)


  const displayCheckedCount = screen.getByText(/Checked Row/i)
  expect(displayCheckedCount).toHaveTextContent('Checked Row Count: 0')

  const displayCheckedBalance = screen.getByText(/Balance: /i)
  expect(displayCheckedBalance).toHaveTextContent('Balance: 0')

})
