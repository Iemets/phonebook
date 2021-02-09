import React from 'react';
import { CircularProgress, Box } from '@chakra-ui/react';



const Loader = () => {
    return (
        <Box m="200px auto" w="50px">
            <CircularProgress isIndeterminate/>
        </Box>
    );
}

export default Loader;