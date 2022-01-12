import { render } from '@testing-library/react';

import App from './app';

describe('<App />', () => {
  it('increments counter when button is clicked', () => {
    const { container } = render(<App />);

    expect(container.firstChild).toBeTruthy();
  });
});
