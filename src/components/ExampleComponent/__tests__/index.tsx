import { render } from '@testing-library/react';

import ExampleComponent from '../index';

describe('Example Component', () => {
  it('renders', () => {
    const { getByText } = render(<ExampleComponent />);

    expect(getByText('Component')).toBeInTheDocument();
  });
});
