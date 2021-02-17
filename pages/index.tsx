import ExampleView from '@views/ExampleView';
import { Heading } from 'belly-ui/primitives';
import React from 'react';

const Home = (): JSX.Element => (
  <div>
    <Heading>Page</Heading>
    <ExampleView />
  </div>
);

export default Home;
