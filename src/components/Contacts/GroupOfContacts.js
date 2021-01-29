import React from 'react';
import { UnorderedList, ListItem, Badge, useColorModeValue } from '@chakra-ui/react';
import ContactHolder from './ContactHolder';


const GroupOfContacts = ({ group, letterTag, contacts, input  }) => {
    const borderColor = useColorModeValue('gray.300', 'gray.600');
    return (
        <UnorderedList listStyleType="none" ml="0">
            <ListItem w="100%" position="sticky" top="0" bgColor={borderColor}>
                <Badge ml="30px" fontSize={18} bgColor={borderColor}>{letterTag}</Badge>
            </ListItem>
                {group.map((contact) => {
                    return (
                        <ContactHolder 
                            key={contact.id}
                            contact={contact} 
                            contacts={contacts}
                            input={input} 
                        />
                    )
                })}
        </UnorderedList>
    );
};

export default GroupOfContacts;

