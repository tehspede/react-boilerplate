import { fireEvent, render, screen } from '@testing-library/react';

import * as useAppDispatch from '../hooks/use-app-dispatch';
import * as useAppSelector from '../hooks/use-app-selector';
import { increment } from '../slices/counter';
import Counter from './counter';

describe('<Counter />', () => {
  beforeEach(() => {
    jest
      .spyOn(useAppSelector, 'default')
      .mockImplementation((selector) => selector({ counter: { value: 0 } }));
    jest.spyOn(useAppDispatch, 'default').mockImplementation();
  });

  it('formats time correctly when count is not one', () => {
    render(<Counter />);

    expect(screen.getByText('Clicked 0 times')).toBeTruthy();
  });

  it('formats time correctly when count is one', () => {
    jest.spyOn(useAppSelector, 'default').mockReturnValue(1);

    render(<Counter />);

    expect(screen.getByText('Clicked 1 time')).toBeTruthy();
  });

  it('increments counter when button is clicked', () => {
    const spy = jest.fn();

    jest.spyOn(useAppDispatch, 'default').mockReturnValue(spy);

    render(<Counter />);

    fireEvent.click(screen.getByRole('button'));

    expect(spy).toHaveBeenCalledWith(increment());
  });
});
