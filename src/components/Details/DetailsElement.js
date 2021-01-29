import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const DetailsElement = ({ boxprops, title, name }) => {
    const bg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    const fontColor = useColorModeValue('black', 'gray.400');

    return (
        <Box 
            border="1px solid"
            borderColor={borderColor}
            rounded="lg"
            p="15px"
            bgColor={bg}
            color={fontColor}
            m="20px 0"
            {...boxprops}
        >
            <Text>{title}</Text>
            <Text fontSize="20px" color="blue.500">{name}</Text>
        </Box>
    );
}

export default DetailsElement;