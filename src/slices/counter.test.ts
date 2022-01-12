import reducer, { increment } from './counter';

describe('counter', () => {
  it('increments the counter', () => {
    const initialState = {
      value: 0,
    };

    const expectedState = {
      value: 1,
    };

    expect(reducer(initialState, increment())).toEqual(expectedState);
  });
});
