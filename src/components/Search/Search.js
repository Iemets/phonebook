import React from 'react';
import Proptypes from 'prop-types';
import { Input, InputGroup, 
        InputLeftElement, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const Search = ({ onchange, input }) => {
    const bg = useColorModeValue('white', 'gray.800');
    return (
        <InputGroup>
        <InputLeftElement>
            <Tooltip label='Search for contact'>
                <SearchIcon color="gray.300"/>
            </Tooltip>
        </InputLeftElement>
        <Input 
            bgColor={bg}
            mb="20px"
            rounded="15px"
            placeholder="Search"
            _placeholder={{color: 'gray.400'}}
            fontSize="20px"
            value={input}
            onChange={e => onchange(e.target.value)}
        />
    </InputGroup>
    );
};

Search.propTypes = {
    onchange: Proptypes.func,
    input: Proptypes.string
};


export default Search;