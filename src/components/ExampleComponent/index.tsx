import { Box, Heading } from 'belly-ui/primitives';
import React from 'react';

interface Props {}

const ExampleComponent = ({}: Props) => {
  return (
    <Box>
      <Heading as="h4">Component</Heading>
    </Box>
  );
};

export default ExampleComponent;
