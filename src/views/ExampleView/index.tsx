import ExampleContainer from '@containers/ExampleContainer';
import { Box, Heading } from 'belly-ui/primitives';
import React from 'react';

const ExampleView = () => (
  <Box>
    <Heading as="h2">View</Heading>
    <ExampleContainer exampleProp="Container" />
  </Box>
);

export default ExampleView;
