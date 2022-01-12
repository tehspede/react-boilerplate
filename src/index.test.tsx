import ReactDOM from 'react-dom';

describe('index.tsx', () => {
  const element = document.createElement('div');

  beforeEach(() => {
    jest.spyOn(document, 'querySelector').mockImplementation(() => element);
  });

  it('calls ReactDOM.render', () => {
    jest.spyOn(ReactDOM, 'render').mockReturnValue();

    require('./'); // eslint-disable-line unicorn/prefer-module

    expect(ReactDOM.render).toHaveBeenCalledWith(expect.anything(), element);
  });
});
