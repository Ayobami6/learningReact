/* eslint-disable no-undef */
import Star from './Star';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testing from './Testing';

test('This is a render h1 test', () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/This is a test component/);
  expect(h1).toBeInTheDocument();
});

test('Checkbox testing', () => {
  const { getByLabelText } = render(<Testing />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
