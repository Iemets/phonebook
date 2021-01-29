import React from 'react';
import { Flex, Spacer, Box, Heading, 
        IconButton, useColorModeValue,
        Tooltip 
    } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { MoonSunToggleIcon } from '../icons/icons';


const Header = () => {
    const bg = useColorModeValue('white', 'gray.900');
    return (
        <Flex 
            w={['100%']}
            bgColor={bg}
            position="fixed"
            zIndex="3"
            p="25px"
            boxShadow="md"
        >
            <Box>
                <Heading fontWeight="200">Olek's PhoneBook</Heading>
            </Box>
            <Spacer/>
            <Flex
                w='10%'
                justifyContent='space-evenly'
            >
                <Tooltip label={'Add contact'}>
                    <IconButton bgColor={bg} icon={<AddIcon/>}/>
                </Tooltip>
                <MoonSunToggleIcon/>
            </Flex>
      </Flex>
    );
}

export default Header;