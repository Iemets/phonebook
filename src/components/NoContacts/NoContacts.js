import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';


const NoContacts = () => {
    const textStyle = {
        fontSize: '35px',
        fontWeight: '200',
        textAlign: 'center',
        letterSpacing: '3px'
    };
    const bg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.300', 'gray.600');

    return (
        <Box
            w={['100%', '100%', '100%', '47%']}
        >
            <Box h="700px"  border="1px solid"  borderColor={borderColor} 
                bgColor={bg} rounded="15px" boxShadow="md"  overflowX="scroll"
            >
                <Box mt="50px">
                    <Text {...textStyle}>Nothing to see here.</Text>
                    <Text {...textStyle}>Add your first contact.</Text>
                </Box>
            </Box>
        </Box>
    );
}


export default NoContacts;