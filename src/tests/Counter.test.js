// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterText = screen.getByText(/Counter/i);
  expect(counterText).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId("count");
  expect(initCount.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incButton = screen.getByRole('button', {name: "+"});
  fireEvent.click(incButton);

  const oneIncrement = screen.getByTestId("count");
  expect(oneIncrement.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decButton = screen.getByRole('button', {name: "-"});
  fireEvent.click(decButton);

  const oneDecrement = screen.getByTestId("count");
  expect(oneDecrement.textContent).toBe("-1");
});

test('increment + many times', ()=> {
  const incButton = screen.getByRole('button', {name: "+"});

  for(let i = 0; i < 55; i++)
  {
    fireEvent.click(incButton);
  }

  const manyIncrement = screen.getByTestId("count");
  expect(manyIncrement.textContent).toBe("55");
});

test('decrement - many times', ()=> {
  const decButton = screen.getByRole('button', {name: "-"});

  for(let i = 0; i < 22; i++)
  {
    fireEvent.click(decButton);
  }

  const manyDecrement = screen.getByTestId("count");
  expect(manyDecrement.textContent).toBe("-22");
});

test('clicking + and - many times', ()=> {
  // tests for both increment and decrement of counter
  const upButton = screen.getByRole('button', {name: "+"});
  const downButton = screen.getByRole('button', {name: "-"});

  const init = screen.getByTestId("count");
  expect(init.textContent).toBe("0"); // verify initial value 0

  for(let i = 0; i < 33; i++)
  {
    if(i % 5 == 0)
    {
      fireEvent.click(downButton);
      continue;
    }
    fireEvent.click(upButton);
  }

  const change = screen.getByTestId("count");
  expect(change.textContent).toBe("19");

});
