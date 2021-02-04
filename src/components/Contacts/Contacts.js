import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Box, useColorModeValue } from "@chakra-ui/react";
import Search from '../Search/Search';
import GroupOfContacts from './GroupOfContacts';

const alphabet = [...Array(26)].map((_, y) => String.fromCharCode(y + 65));

const Contacts = ({ contacts }) => {
    const [input, setInput] = useState('');
    const bg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.300', 'gray.600');

    contacts = contacts.filter(c => c.lastName.toLowerCase().includes(input.toLowerCase()) || 
        c.firstName.toLowerCase().includes(input.toLowerCase()));

    return (
        <Box w={['100%', '100%', '100%', '47%']}>
            <Search onchange={setInput} input={input}/>
            <Box h="700px"  border="1px solid"  borderColor={borderColor} 
                bgColor={bg} rounded="15px" boxShadow="md"  overflowX="scroll"
            >
                {alphabet.map((l, i) => {
                    let group = contacts.filter(contact => contact.lastName.charAt(0) === l);
                    group.sort((a, b) => {
                        const nameA = a.lastName.toUpperCase();
                        const nameB = b.lastName.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                        });
                    return (
                        group.length === 0 ? null :
                            <GroupOfContacts
                                key={i}
                                group={group}
                                letterTag={l}
                                contacts={contacts}
                                input={input}
                            />
                        );
                    })   
                }
            </Box>
        </Box>
    );
};


Contacts.propTypes = {
    contacts: Proptypes.array
};

export default Contacts;