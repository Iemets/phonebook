import React, { useEffect, useState } from 'react';
import { 
        Box, UnorderedList, ListItem, 
        Badge, Input, InputGroup, InputLeftElement, 
        useColorModeValue, Tooltip
    } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { connect } from 'react-redux';
import { getAllContacts } from '../../store/actionCreator';
import GroupItem from './GroupItem';

const alphabet = [...Array(26)].map((_, y) => String.fromCharCode(y + 65));

const Contacts = ({ contacts, getContacts }) => {
    const [input, setInput] = useState('');
    const bg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.300', 'gray.600');
    
    contacts = contacts.filter(c => c.lastName.toLowerCase().includes(input.toLowerCase()) || 
    c.firstName.toLowerCase().includes(input.toLowerCase()));

    useEffect(() => {
        getContacts();
    }, [getContacts]);

    return (
        <Box w={['100%', '100%', '100%', '47%']}>
            <InputGroup>
                
                <InputLeftElement 
                    children={
                        <Tooltip label='Search for contact'>
                            <SearchIcon color="gray.300"/>
                        </Tooltip>
                    }
                />
                
                <Input 
                    bgColor={bg}
                    mb="20px"
                    rounded="15px"
                    placeholder="Search"
                    _placeholder={{color: 'gray.400'}}
                    fontSize="20px"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
            </InputGroup>
            
        <Box 
            h="700px"
            border="1px solid"
            borderColor={borderColor} 
            bgColor={bg}
            rounded="15px"
            boxShadow="md"
            overflowX="scroll"
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
                    <UnorderedList listStyleType="none" key={i} ml="0">
                        <ListItem w="100%" position="sticky" top="0" bgColor={borderColor}>
                            <Badge ml="30px" fontSize={18} bgColor={borderColor}>{l}</Badge>
                        </ListItem>
                            {group.map((contact) => {
                                return (
                                    <GroupItem  
                                        key={contact.id}
                                        contact={contact} 
                                        contacts={contacts}
                                        input={input} 
                                    />
                                )
                            })}
                    </UnorderedList>
                )
            })}
            </Box>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.allContacts,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getContacts: () => dispatch(getAllContacts()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);