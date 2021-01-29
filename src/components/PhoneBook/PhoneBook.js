import React from 'react';
import { Flex, Spacer, useColorModeValue  } from '@chakra-ui/react';

import Contacts from '../Contacts/Contacts';
import Details from '../Details/Details';


const PhoneBook = () => {
    const bg = useColorModeValue('gray.100', 'gray.800')
    return (
        <Flex 
            p="120px 30px" 
            rounded="lg"
            boxShadow="dark-lg"
            bgColor={bg}
            minH="800px"
        >
            <Contacts/>
            <Spacer/>
            <Details/>
        </Flex>
    );
}

export default PhoneBook;