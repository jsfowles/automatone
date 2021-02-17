import ExampleComponent from '@components/ExampleComponent';
import { Box, Heading } from 'belly-ui/primitives';
import React from 'react';

interface Props {
  exampleProp: string;
}

const ExampleContainer = ({ exampleProp }: Props) => {
  return (
    <Box>
      <Heading as="h3">{exampleProp}</Heading>
      <ExampleComponent />
    </Box>
  );
};

export default ExampleContainer;
