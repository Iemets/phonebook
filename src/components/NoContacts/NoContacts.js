import React from 'react';
import { Box, Text } from '@chakra-ui/react';


const NoContacts = () => {
    return (
        <Box
            w={['100%', '100%', '100%', '47%']}
        >
            <Text 
                fontSize="35px" 
                fontWeight="200"
                textAlign="center"
                letterSpacing="3px"
            >
                No contacts found
            </Text>
        </Box>
    );
}


export default NoContacts;